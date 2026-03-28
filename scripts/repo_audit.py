#!/usr/bin/env python3
"""Lightweight SEO/indexability audit for this repository."""

from __future__ import annotations

import datetime as dt
import glob
import os
import re
from collections import defaultdict

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
TODAY = dt.date.today()


def read_text(path: str) -> str:
    with open(path, "r", encoding="utf-8", errors="ignore") as handle:
        return handle.read()


def list_html_pages() -> list[str]:
    pages: list[str] = []
    for rel in glob.glob("**/*.html", recursive=True):
        if rel.startswith("_includes/") or rel.startswith("_layouts/"):
            continue
        if rel.startswith("assets/"):
            continue
        pages.append(rel)
    return sorted(pages)


def to_absolute_url(rel_path: str) -> str:
    if rel_path == "index.html":
        return "https://smartguidehubs.com/"
    if rel_path.endswith("/index.html"):
        folder = rel_path[: -len("index.html")]
        return f"https://smartguidehubs.com/{folder}"
    return f"https://smartguidehubs.com/{rel_path}"


def find_duplicate_titles(pages: list[str]) -> dict[str, list[str]]:
    by_title: dict[str, list[str]] = defaultdict(list)
    for page in pages:
        text = read_text(page)
        match = re.search(r"<title[^>]*>(.*?)</title>", text, flags=re.I | re.S)
        if match:
            title = " ".join(match.group(1).split())
            by_title[title].append(page)
    return {title: files for title, files in by_title.items() if len(files) > 1}


def find_case_sensitive_asset_issues(pages: list[str]) -> list[tuple[str, str, str]]:
    all_files = [f for f in glob.glob("**/*", recursive=True) if os.path.isfile(f)]
    exact = {"/" + f for f in all_files}
    lower_to_actual = {path.lower(): path for path in exact}
    issues: list[tuple[str, str, str]] = []

    for page in pages:
        text = read_text(page)
        for match in re.finditer(r'(?:src|href)=["\'](/[^"\']+)["\']', text, flags=re.I):
            url = match.group(1)
            if url in exact:
                continue
            alt = lower_to_actual.get(url.lower())
            if alt:
                issues.append((page, url, alt))
    return issues


def find_sitemap_gaps(pages: list[str]) -> list[tuple[str, str]]:
    text = read_text("sitemap.xml")
    in_sitemap = set(re.findall(r"<loc>(.*?)</loc>", text))
    gaps: list[tuple[str, str]] = []
    for page in pages:
        if page == "404.html":
            continue
        url = to_absolute_url(page)
        if url not in in_sitemap:
            gaps.append((page, url))
    return gaps


def find_future_posts() -> list[tuple[str, dt.date]]:
    findings: list[tuple[str, dt.date]] = []
    for rel in glob.glob("_posts/*.md"):
        filename = os.path.basename(rel)
        match = re.match(r"(\d{4})-(\d{2})-(\d{2})-", filename)
        if not match:
            continue
        date = dt.date(*map(int, match.groups()))
        if date > TODAY:
            findings.append((rel, date))
    return sorted(findings)


def main() -> None:
    os.chdir(ROOT)
    pages = list_html_pages()

    print(f"Scanned {len(pages)} HTML pages.")
    print("\n[Duplicate titles]")
    duplicates = find_duplicate_titles(pages)
    if not duplicates:
        print("  None found.")
    for title, files in duplicates.items():
        print(f"  - {title}")
        for rel in files:
            print(f"    • {rel}")

    print("\n[Case-sensitive asset path issues]")
    case_issues = find_case_sensitive_asset_issues(pages)
    if not case_issues:
        print("  None found.")
    for page, broken, actual in case_issues:
        print(f"  - {page}: {broken} (actual: {actual})")

    print("\n[Sitemap gaps]")
    gaps = find_sitemap_gaps(pages)
    print(f"  Missing {len(gaps)} page(s) from sitemap.xml")
    for rel, url in gaps:
        print(f"  - {rel}: {url}")

    print("\n[Future-dated posts]")
    future = find_future_posts()
    if not future:
        print("  None found.")
    for rel, date in future:
        print(f"  - {rel} ({date.isoformat()})")


if __name__ == "__main__":
    main()
