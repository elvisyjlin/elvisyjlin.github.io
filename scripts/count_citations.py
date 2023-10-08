from scholarly import scholarly


arxiv_ids = [
    "1908.07269",
    "1903.07994",
    "1805.02070",
    "1807.02933",
]


if __name__ == "__main__":
    for arxiv_id in arxiv_ids:
        arxiv_identifier = "arXiv:" + arxiv_id
        # abstract_url = "https://arxiv.org/abs/" + arxiv_id
        # papar_url = "https://api.semanticscholar.org/v1/paper/" + arxiv_identifier
        print("Search query:", arxiv_identifier)
        pub = scholarly.search_single_pub(arxiv_identifier)
        print("Title:       ", pub["bib"]["title"])
        print("Citations:   ", pub["num_citations"])
    print("Please update the citation numbers in `src/contents/publications.md`.")
