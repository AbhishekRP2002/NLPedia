# NLP Research Papers - Key Takeaways

This repository contains a collection of machine learning research papers from the domain of Natural Language Processing(NLP), along with a README file that summarizes the key takeaways from each paper. The purpose of this repository is to provide a quick reference for researchers, students, and enthusiasts who want to learn about the latest advancements in the field of NLP, and obviously to help myself as well :wink:.


### Repository Overview

- **Title**: NLP Research Papers - Key Takeaways
- **Purpose**: To provide a summary of key takeaways from various machine learning research papers
- **Contents**: PDFs of research papers and a README file containing the key takeaways

### Key Takeaways

#### Paper 1: [A Contrastive Framework for Neural Text Generation](https://arxiv.org/abs/2202.06417)

- **Authors**: Yixuan Su, Tian Lan, Yan Wang, Dani Yogatama, Lingpeng Kong, Nigel Collier
- **Published**: 13 Feb 2022
- **Conference/Journal**: NeurIPS 2022

**Summary**:This paper proposes a new approach to text generation that addresses the problem of degenerate solutions and lack of coherence in existing methods.The authors identify the anisotropic distribution of token representations as a key reason for model degeneration. The proposed approach includes a contrastive training objective and a decoding method called contrastive search. The experiments and analyses conducted on three benchmarks from two languages demonstrate that this approach outperforms current state-of-the-art text generation methods in terms of both human and automatic metrics.

**Key Takeaways**:

- Main objective - To reduce the degeneracy in neural Text Generation and preserve coherence, fluency and Informativeness in the generated text.
1. Coherence - Whether the generated text is semantically consistent with the prefix.
2. Fluency: Whether the generated text is fluent and easy to understand.
3. Informativeness: Whether the generated text is diverse and contains interesting content.
- Approach Suggested: Contrastive search, a decoding method—to encourage diversity while maintaining coherence in the generated text. The key intuitions behind contrastive search are: (i) at each decoding step, the output should be selected from the set of most probable candidates predicted by the model to better maintain the semantic coherence between the generated text and the human-written prefix, and (ii) the sparseness of the token similarity matrix of the generated text should be preserved to avoid degeneration.
- The key ideas of contrastive search are (i) the generated output should be selected from the set of most probable candidates predicted by the model; and (ii) the generated output should be discriminative enough with respect to the previous context. In this way, the generated text can (i) better maintain the semantic coherence with respect to the prefix while (ii) avoiding model degeneration.
- SimCTG(Simple Contrastive search framework for Text Generation) - a contrastive training objective to calibrate the model’s representation space.
- Traditional language modelling techniques involved training a language model with maximum likelihood estimation (MLE) and decoding the most likely sequence, using Decoding methods such as Deterministic Method, which leads to problem of degeneration.
- MLE leads to anisotropic distribution of model representations.
- Evaluation Metrics: Language Modelling Quality [ Perplexity and Prediction accuracy (next word), Prediction Repetition] , Generation Quality (Generation Repetition, Diversity, MAUVE, Semantic Coherence, Perplexity of Gnerated Text)


