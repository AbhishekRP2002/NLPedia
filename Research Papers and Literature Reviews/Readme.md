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

#### Paper 2: [LIMA: Less Is More for Alignment](https://arxiv.org/abs/2305.11206)

- **Authors**: Chunting Zhou, Pengfei Liu, Puxin Xu, Srini Iyer, Jiao Sun, Yuning Mao, Xuezhe Ma, Avia Efrat, Ping Yu, Lili Yu, Susan Zhang, Gargi Ghosh, Mike Lewis, Luke Zettlemoyer, Omer Levy
- **Published**: Thu, 18 May 2023
- **Conference/Journal**: NA

**Summary**: The paper summarizes the training process and results of LIMA, a 65B parameter LLaMa language model. The authors investigate the relative importance of two stages of training: unsupervised pretraining from raw text and fine-tuning with a supervised loss on 1,000 carefully curated prompts and responses, without reinforcement learning or human preference modeling. Remarkably, LIMA achieves strong performance and learns to follow specific response formats from only a few examples in the training data. The model also shows good generalization to unseen tasks. In a controlled human study, LIMA's responses are compared to those of GPT-4, Bard, and DaVinci003, with LIMA either being equivalent or preferred in a significant percentage of cases. These findings suggest that a large portion of knowledge and learning capabilities in large language models is acquired during pretraining, and only a not so large amount of carefully curated instruction tuning data  is required to generate high-quality output.

**Key Takeaways**:

- The paper presents LIMA, a language model that demonstrates strong performance by fine-tuning, a 65B parameter LLaMa language model with only 1,000 carefully curated prompts and responses, and with standard supervised technique, without any reinforcement learning or human preference modeling.
- The limitation to this approach is the amount of mental effort required to construct the examples and the scalability.
Aligning pre-trained language models to perform better on any downstream NLP task requires instruction tuning and RLHF (Reinforcement learning from human feedback) at a large scale.
- This paper aims to hypothesize that alignment of language models can be a simple process where the model learns the style or format for interacting with users, inferring that the quality, diversity of the dataset on which the language model is trained is a key deciding factor in its alignment.
- *Superficial Alignment Hypothesis* : A model’s knowledge and capabilities are learnt almost entirely during pretraining, while alignment teaches it which sub distribution of formats should be used when interacting with users. If this hypothesis is correct, and alignment is largely about learning style, then a corollary of the Superficial Alignment Hypothesis is that one could sufficiently tune a pretrained language model with a rather small set of examples.
- The questions/prompts and responses are collected from three community Q&A websites: Stack Exchange, wikiHow, and the Pushshift Reddit Dataset.
- LIMA is compared to five baselines: Alpaca 65B, OpenAI’s DaVinci003, Google’s Bard, Anthropic’s Claude and, OpenAI’s GPT-4.
- Training LIMA : LIMA (Less Is More for Alignment) was trained by fine-tuning on a 1,000-example alignment training set, using an end-of-turn token to differentiate between speakers. Standard fine-tuning hyperparameters were followed, with AdamW optimizer, a learning rate of 1e-5 decaying to 1e-6, and a batch size of 32 (or 64 for smaller models). Long texts were trimmed, and residual dropout was applied. Manual selection of checkpoints based on a development set was done, considering generation quality rather than perplexity. This training protocol aimed to enhance alignment and generate high-quality responses in dialogue systems.
- It is observed that, for the purpose of alignment, scaling up input diversity and output quality have measurable positive effects, while scaling up quantity alone might not.
- The paper shows that fine-tuning a strong pretrained language model on 1,000s carefully curated examples can produce remarkable, competitive results on a wide range of prompts.


#### Paper 3: [Chain-of-Thought Prompting Elicits Reasoning in Large Language Models](https://arxiv.org/abs/2201.11903)

- **Authors**: Jason Wei, Xuezhi Wang, Dale Schuurmans, Maarten Bosma, Brian Ichter, Fei Xia, Ed Chi, Quoc Le, Denny Zhou
- **Published**: 10 Jan 2023 (Revised version)
- **Conference/Journal**: 

**Summary**: This paper introduces a method called chain-of-thought prompting, which significantly improves the reasoning abilities of large language models and throws light on how reasoning abilities emerge in LLMs. The authors demonstrate that chain-of-thought reasoning is an emergent property of model scale that allows sufficiently large language models to perform complex reasoning tasks. The experiments tested this method on various benchmarks, including arithmetic, symbolic, and commonsense reasoning tasks and results reflected that the language models performed well on these tasks when prompted with chain-of-thought demonstrations. The authors suggest that future work should focus on expanding the range of reasoning tasks that language models can perform successfully using methods like chain-of-thought prompting and trying to come up with solutions addressed by it's potential limitations.

**Key Takeaways**:

- The paper explores the ability of language models to perform few-shot prompting for reasoning tasks, given a prompt that consists of triples: <input, chain of thought, output>.
- A *chain of thought* is a series of intermediate natural language reasoning steps that lead to the final output, and we refer to this prompting technique as chain-of-thought prompting.
- This paper's objective is to enable large language models with the ability to generate a series of sequential intermediate steps(rationales) which might help them to obtain the final answer for a problem, preserving the coherent nature throughout.
- CoT allows decomposition of complex problems which might require reasoning (arithmetic reasoning or commonsense reasoning for instance) into intermediate sub problems. It also allows the LLMs to act as self-critique and scope for debugging where the reason path might have gone wrong.
- The method is achieved by the combination of few-shot prompting technique and rationale-augmented training of the model.
- The results from the paper showed that chain-of-thought prompting is an emergent property of model scale that allows sufficiently large language models to perform reasoning tasks that otherwise have flat scaling curves.
- The paper also underscores that standard prompting or let's say zero-shot prompting only provides a lower bound on the capabilities of the large language models.
- Limitations :
1. Although chain-of-thought emulates the thought processes of human reasoners, it is not clear whether the neural network is actually "reasoning."
2. The cost of manually augmenting exemplars with chains of thought is minimal in the few-shot setting but could be prohibitive for finetuning.
3. There is no guarantee of correct reasoning paths, which can lead to both correct and incorrect answers.
4. Chain-of-thought reasoning only emerges at large model scales, which makes it costly to serve in real-world applications.
