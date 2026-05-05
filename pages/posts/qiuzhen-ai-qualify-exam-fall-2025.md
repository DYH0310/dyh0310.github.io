---
title: "QIUZHEN QUALIFY EXAM FOR ARTIFICIAL INTELLIGENCE-FALL 2025：机器学习理论部分（Part A）个人解答"
date: 2026-05-05T12:38:00+08:00
excerpt: 机器学习理论部分（Part A） 个人解答
categories:
  - AI
tags:
  - machine-learning
  - theory
  - qiuzhen
toc: true
---

# QIUZHEN QUALIFY EXAM FOR ARTIFICIAL INTELLIGENCE-FALL 2025

机器学习理论部分（Part A） 个人解答

## Part1 Warm-Up Questions

1. (a) Increasing model bias reduces variance but increases approximation error

2. \(c\) There is no universally superior learning algorithm across all tasks

3. (a) It measures how well a hypothesis class fits random labels

4. (b) The average loss on the training sample

5. (b) The VC dimension of halfspaces in $R^d$ is exactly d+1

6. \(c\) The goal is to compete with the best hypothesis in the class, even if labels are noisy

7. (b) It ensures convergence under certain convexity assumptions

8. (b) The growth function τH(m) is bounded polynomially in m once m > d

## Part II

### Q9 本题考察VC-dim相关的概念

考虑实数轴上的任意三点 $x_1 < x_2 < x_3$ ，我们总能在假设类 $H$ 中的一个假设 $h$，将这三点打散，此处不再赘述。

考虑在实数轴上的四点，不妨设 $x_1 < x_2 < x_3 < x_4$（因为我们总能将其按照从大到小排序），若其标签为 $(+1,-1,+1,-1)$

（a）若使 $x_1, x_3$ 标记为 $+1$，那么 $[x_1, x_3]\subseteq [a,b]$，则这迫使了 $x_2$ 的标记为 $+1$，与假设不符

（b）若是 $x_2,x_4$ 标记为 $-1$，那么 $[x_2, x_4]\subseteq [a,b]$，则这迫使了 $x_3$ 的标记为 $-1$，与假设不符

综上，可以证明 $\text{VCdim}(H)=3$

### Q10 本题考查凸优化的基本概念

（a）计算 $f(\mathbf{w})=\lambda \sum_{i=1}^d w_i^2$ 的梯度：

$$\nabla f(\mathbf{w})=2\lambda \mathbf{w}$$

计算其Hessian矩阵，有：

$$\nabla^2 f(\mathbf{w})=2\lambda I$$

根据strongly convex的二阶判定条件，可得 $f(\mathbf{w})$ 是 $2\lambda-$ strongly convex的

（b）回归定义：

由于 $f$ 是 $\lambda-$ strongly convex的，因此对任意 $w,v\in R^d$ 我们有：

$$f(w)\geq f(v)+\nabla f(v)^T (w-v)+\frac{\lambda}{2} ||w-v||^2$$

由于 $g$ 是凸函数，因此对任意 $w,v\in R^d$ 我们有：

$$g(w)\geq g(v)+\nabla g(v)^T (w-v)$$

因此 $h=f+g$，即对于任意 $w,v\in R^d$ 我们有：

$$h(w)=f(w)+g(w) \geq f(v)+\nabla f(v)^T (w-v)+\frac{\lambda}{2} ||w-v||^2+g(v)+\nabla g(v)^T (w-v)$$

即对于任意 $w,v\in R^d$：

$$h(w)\geq h(v)+(\nabla f(v)+\nabla g(v))^T(w-v)+\frac{\lambda}{2} ||w-v||^2$$

即对于任意 $w,v\in R^d$：

$$h(w)\geq h(v)+\nabla h(v)^T(w-v)+\frac{\lambda}{2} ||w-v||^2$$

这就证明了 $h=f+g$ 是 $\lambda-$ strongly convex的。

（c）由于 $u$ 是 $f$ 的极小值点，很自然的，我们有：

$$\nabla f(u)=0$$

回归定义，对任意 $w,v\in R^d$ 我们有：

$$f(w)\geq f(v)+\nabla f(v)^T (w-v)+\frac{\lambda}{2} ||w-v||^2$$

令 $v=u$，代入不等式，考虑到$\nabla f(u)=0$，我们就有：

$$f(w)\geq f(u)+\frac{\lambda}{2} ||w-u||^2$$

这就是本题要求的不等式

### Q11 本题考查PAC-learnable的概念

这个假设是可实现的，即存在真实半径 $r^{\star}$，使得对任意的 $||x_i||>r^{\star}$，$y_i=0$；而对任意的 $||x_i||< r^{\star}$，$y_i=1$

我们只需要选择一个ERM假设 $h_{r_S}$，其中 $r_S$ 是所有训练集中标记为 $1$ 的点中，距离原点最远的点的距离

接下来我们考虑证明，当训练样本量 $m$ 足够大的时候，该误差大于 $\epsilon$ 的概率小于 $\delta$，即 $P[L_D(h_{r_S}) > \epsilon]\le \delta$

我们考虑什么情况下，该误差会大于 $\epsilon$，即存在一个临界距离 $r_{\epsilon}$，使得 $P[r_{\epsilon} < ||x|| < r^{\star}] = \epsilon$，然后所有的 $m$ 个点都落在了 $r_{\epsilon}$ 以内的同心圆，该概率为 $(1-\epsilon)^m$

为了满足 PAC 可学习的要求，我们需要：

$$(1-\epsilon)^m\le \delta$$

使用我们熟知的不等式，我们可以得到：

$$(1-\epsilon)^m\le e^{-m\epsilon}$$

即

$$e^{-m\epsilon}\le \delta$$

两边取对数，即有：$m_{H}(\epsilon,\delta)\le \frac{\log (1/\delta)}{\epsilon}$，即证。

### Q12 不会

**数学基础太差了，惩罚一块华为手表！**

### Q13 本题考察万有逼近定理的证明

由于 $f$ 是 $\rho$-Lipschitz连续的，这意味着对于任意 $x, y \in [-1, 1]^n$，都有：

$$|f(x) - f(y)| \le \rho \|x - y\|_2 \le \rho \sqrt{n} \|x - y\|_\infty$$

根据题目的提示，我们考虑将 $[-1,1]^n$ 划分为边长为 $\delta$ 的小方块，为了控制逼近误差，我们只需要有：

$$\rho \sqrt{n}\delta \le \epsilon$$

此后，在每个方块上，我们使用常数 $c_i=f(x_i)$ 来近似 $f(x)$ 即可。其中 $x_i$ 为方块的中心点

接下来考虑具体的构造，首先在维度 $j$ 上的区间 $[a,b]$，我们考虑足够大的大数 $M$，令

$$g_j(x_j)=\sigma(M(x_j-a))-\sigma(M(x_j-b))$$

接下来我们考虑构造方块的指示函数，即令

$$ L_i(x)=\sigma(M(\sum_{j=1}^n g_j(x_j)-n+0.5))$$

由于 $M$ 为足够大的数，因此在所有指示函数 $g_j$ 都指示在方块在维度 $j$ 对应的区间上的时候，括号内得到 $0.5$，此时指示函数趋近于1，否则括号内为负数，输出趋近于0

综上，我们可以构造一个三层的神经网络：

1. 隐藏层1：计算每个方块在每个维度上的指示函数 $g_j$
2. 隐藏层2：计算每个方块的指示函数 $L_i(x)$
3. 输出层：输出 $\sum c_i L_i(x)$
