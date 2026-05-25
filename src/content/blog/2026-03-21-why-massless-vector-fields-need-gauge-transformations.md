---
layout: post
title: Why a massless vector field transforms with a gauge shift
image: /assets/img/weinberg.jpg
description: A detailed derivation, following the little-group logic of Weinberg, of why a Lorentz-covariant massless spin-1 field cannot transform as a pure four-vector.
---

## Introduction

Gauge invariance is not a quantum idea. It is already built into classical
electrodynamics.

In the classical theory the physical electric and magnetic fields are

$$
\mathbf{E}=-\nabla \phi-\frac{\partial \mathbf{A}}{\partial t},
\qquad
\mathbf{B}=\nabla\times \mathbf{A}.
$$

The scalar potential $\phi$ and the vector potential $\mathbf{A}$ are not
unique. If $\chi(t,\mathbf{x})$ is any sufficiently smooth function, then

$$
\mathbf{A}\to \mathbf{A}+\nabla\chi,
\qquad
\phi\to \phi-\frac{\partial \chi}{\partial t}
$$

leaves both $\mathbf{E}$ and $\mathbf{B}$ unchanged. This is the ordinary
gauge invariance of Maxwell theory. In covariant notation, with

$$
F_{\mu\nu}=\partial_\mu A_\nu-\partial_\nu A_\mu,
$$

the same statement is simply

$$
A_\mu \to A_\mu+\partial_\mu \chi,
\qquad
F_{\mu\nu}\to F_{\mu\nu}.
$$

The invariance follows because

$$
\partial_\mu\partial_\nu\chi-\partial_\nu\partial_\mu\chi=0.
$$

So even before quantization, the potential $A_\mu$ contains redundant
information. Classical electrodynamics only assigns direct physical meaning to
gauge-invariant quantities such as $F_{\mu\nu}$, or equivalently
$\mathbf{E}$ and $\mathbf{B}$.

The more interesting question is why this same redundancy becomes almost
unavoidable in quantum field theory. In classical electrodynamics gauge
invariance may first appear as a curious non-uniqueness of the potentials. In
relativistic quantum theory it becomes the mechanism that lets a local
Lorentz-covariant vector field describe a massless spin-1 particle while still
matching the unitary representations of the Poincare group.

There is a famous statement in quantum field theory:

> if a massless spin-1 particle is described by a Lorentz-covariant field $A_\mu(x)$, then under a Lorentz transformation the field cannot transform as a **pure** four-vector. It must transform as a four-vector **plus** a gauge transformation.

In formulas, one does **not** have simply

$$
A_\mu(x)\to {\Lambda_\mu}^{\nu} A_\nu(\Lambda^{-1}x),
$$

but rather

$$
A_\mu(x)\to {\Lambda_\mu}^{\nu} A_\nu(\Lambda^{-1}x)+\partial_\mu \Omega_\Lambda(x).
$$

Why is that unavoidable?

The answer is encoded in the way one-particle states transform under spacetime
symmetries. In this post I will follow the logic used by Weinberg and work
through the mathematics explicitly.

Before starting, let me make two important clarifications.

### 1. This is about **massless** spin-1 particles

For a **massive** vector boson the little group is different and the argument below does not go through in the same way.

### 2. One helicity or two?

Strictly speaking, Lorentz invariance by itself does **not** force a massless particle to come with both helicities $+1$ and $-1$.

For the proper orthochronous Poincare group, an irreducible unitary massless representation may have a **single** helicity $h$. If the theory is also invariant under **parity**, then parity flips helicity and therefore one must include both $+h$ and $-h$.

So:

- Lorentz invariance + unitarity allows one-helicity massless representations.
- Parity invariance forces the pair $(+h,-h)$.

Parity is **not** in the connected Lorentz group. It belongs to the full Lorentz group $O(1,3)$ as a disconnected transformation.

None of that changes the main conclusion of this post: whenever we try to describe a massless helicity-1 particle with a local Lorentz four-vector $A_\mu$, the field must transform up to a gauge shift.

## Why the little group appears

In quantum mechanics the states live in a Hilbert space, and a symmetry is a
transformation that preserves transition probabilities. Wigner's theorem then
says that any such symmetry must be represented on the Hilbert space by either
a unitary or an antiunitary operator. Weinberg phrases the starting point in
exactly this way: symmetries in quantum mechanics are implemented by operators
that preserve inner products, with the allowed possibilities being unitary or
antiunitary.

For continuous spacetime symmetries connected to the identity, such as ordinary
Lorentz transformations and translations, one uses the unitary branch.
Antiunitary symmetries appear for transformations like time reversal, but they
are not the relevant case in the connected Poincare transformations considered
below.

So in relativistic quantum theory one studies unitary representations of the
Poincare group: Lorentz transformations plus spacetime translations.

Translations let us label one-particle states by four-momentum. We write such
states schematically as

$$
|p,\sigma\rangle,
$$

where $p^\mu$ is the four-momentum and $\sigma$ denotes any remaining internal
label, such as spin or helicity.

A Lorentz transformation changes the momentum:

$$
p^\mu \to {\Lambda^\mu}_\nu p^\nu.
$$

So the first job of a Lorentz transformation is kinematical: it moves us from
the state with momentum $p$ to a state with momentum $\Lambda p$. But this does
not yet tell us how the spin or helicity labels transform.

The key observation is that all momenta with the same invariant mass lie on the
same Lorentz orbit. Therefore we can choose one convenient reference momentum
$k^\mu$, called the standard momentum, and obtain any other momentum $p^\mu$ on
that orbit by some Lorentz transformation $L(p)$:

$$
p^\mu = {L(p)^\mu}_\nu k^\nu.
$$

Now apply a Lorentz transformation $\Lambda$ to a state with momentum $p$. There
are two equivalent ways to compare the internal labels:

1. start at $k$, use $L(p)$ to reach $p$, then use $\Lambda$ to reach
   $\Lambda p$;
2. start at $k$ and use the chosen standard transformation $L(\Lambda p)$ to
   reach $\Lambda p$ directly.

The difference between these two procedures is

$$
W(\Lambda,p)=L^{-1}(\Lambda p)\,\Lambda\,L(p).
$$

By construction this transformation leaves the standard momentum fixed:

$$
W(\Lambda,p)k=k.
$$

This is the little group. It is not introduced by hand. It appears because once
we factor out the purely kinematical change of momentum, the only remaining
freedom is a Lorentz transformation that leaves the reference momentum
unchanged. That remaining transformation is what acts on the internal labels
$\sigma$.

This also explains why the boosts are not the main object of classification.
We are not ignoring boosts. A boost is essential because it moves a particle
from one momentum to another momentum on the same mass shell. But this motion
is universal: every particle with the same mass has its momentum moved in the
same way. By itself it does not tell us whether the particle is spin 0, spin
$1/2$, spin 1, or something else.

The intrinsic information is what remains after this momentum-changing part has
been removed. In the formula above, $L(p)$ and $L(\Lambda p)$ account for the
choice of boosts or standard Lorentz transformations that carry the reference
momentum $k$ to the actual momentum. The leftover transformation
$W(\Lambda,p)$ keeps $k$ fixed, so it cannot be changing the momentum anymore.
It acts only on the internal labels. That is why the little group, rather than
the boosts themselves, classifies the spin or helicity content of the particle.

So Wigner's classification of one-particle states reduces to this question:

> For a chosen standard momentum $k$, what are the unitary irreducible
> representations of the subgroup of Lorentz transformations that leaves $k$
> fixed?

For massive particles this subgroup is $SO(3)$, which is why massive particles
are classified by ordinary spin. For massless particles the subgroup is
different, and that difference is exactly where the gauge transformation will
come from.

## Step 1: choose the standard null momentum

For a massless particle Weinberg chooses a standard four-momentum

$$
k^\mu = (\kappa,0,0,\kappa),
$$

with $\kappa > 0$ fixed.

The little group consists of all Lorentz transformations $W$ that leave this momentum invariant:

$$
W^\mu{}_\nu k^\nu = k^\mu.
$$

For a massless particle this little group is isomorphic to

$$
ISO(2),
$$

the Euclidean group in two dimensions: one rotation plus two translations.

This is already the essential difference with the massive case, where the little group is $SO(3)$.

## Step 2: write the little-group elements explicitly

It is convenient to separate the little group into:

- a rotation around the $z$ axis,
- and a two-parameter "translation" part.

The rotation is

$$
R(\theta)=
\begin{pmatrix}
1 & 0 & 0 & 0 \\
0 & \cos\theta & -\sin\theta & 0 \\
0 & \sin\theta & \cos\theta & 0 \\
0 & 0 & 0 & 1
\end{pmatrix}.
$$

One checks immediately that

$$
R(\theta)k = k.
$$

The translation part may be written as

$$
S(\alpha,\beta)=
\begin{pmatrix}
1+\frac{\alpha^2+\beta^2}{2} & \alpha & \beta & -\frac{\alpha^2+\beta^2}{2} \\
\alpha & 1 & 0 & -\alpha \\
\beta & 0 & 1 & -\beta \\
\frac{\alpha^2+\beta^2}{2} & \alpha & \beta & 1-\frac{\alpha^2+\beta^2}{2}
\end{pmatrix}.
$$

Again one verifies directly that

$$
S(\alpha,\beta)k = k.
$$

So a general little-group element may be built from these objects. The important point for us is not the exact group multiplication law, but the fact that the little group contains the non-compact translation sector $(\alpha,\beta)$.

## Step 3: arbitrary unitary irreducible representations of the massless little group

At this point it is important to be precise. What we classify in Wigner's construction is not an arbitrary unitary representation of the full Lorentz group, but an arbitrary unitary irreducible representation of the **massless little group**.

The Lie algebra of the little group is generated by

$$
J_3, \qquad N_1,\qquad N_2,
$$

with commutation relations

$$
[J_3,N_1]=iN_2,\qquad [J_3,N_2]=-iN_1,\qquad [N_1,N_2]=0.
$$

This is exactly the Lie algebra of $ISO(2)$.

Now suppose we have a **unitary** representation. Then the generators are
represented by self-adjoint operators, so in particular $N_1$ and $N_2$ are
self-adjoint. Their eigenvalues must therefore be real. Also, since

$$
[N_1,N_2]=0,
$$

we can diagonalize them simultaneously, at least in the generalized sense
appropriate for operators with continuous spectrum.

So let us first write a simultaneous generalized eigenstate as $|n_1,n_2\rangle$:

$$
N_1 |n_1,n_2\rangle = n_1 |n_1,n_2\rangle,
\qquad
N_2 |n_1,n_2\rangle = n_2 |n_1,n_2\rangle.
$$

Here $n_1$ and $n_2$ are just two real numbers. The notation
$\rho\cos\phi$ and $\rho\sin\phi$ is only a change to polar coordinates in this
two-dimensional eigenvalue plane:

$$
n_1=\rho\cos\phi,
\qquad
n_2=\rho\sin\phi,
\qquad
\rho=\sqrt{n_1^2+n_2^2}\ge 0.
$$

With this notation we call the same eigenstate $|\rho,\phi\rangle$, and the
eigenvalue equations become

$$
N_1 |\rho,\phi\rangle = \rho\cos\phi\, |\rho,\phi\rangle,
\qquad
N_2 |\rho,\phi\rangle = \rho\sin\phi\, |\rho,\phi\rangle,
$$

with $\rho\ge 0$ by definition.

The number

$$
\rho^2 = N_1^2 + N_2^2
$$

is invariant under the rotation generated by $J_3$, because $J_3$ rotates the
pair $(N_1,N_2)$ without changing its length. This is why $\rho$ labels the
orbit of translation eigenvalues inside the little-group representation. The
angle $\phi$ tells us where we are on that orbit.

Now let us see how rotations act on these eigenstates. Since

$$
U(R(\theta))N_1U(R(\theta))^{-1}=N_1\cos\theta+N_2\sin\theta,
$$

and

$$
U(R(\theta))N_2U(R(\theta))^{-1}=-N_1\sin\theta+N_2\cos\theta,
$$

it follows that

$$
U(R(\theta))|\rho,\phi\rangle = |\rho,\phi+\theta\rangle
$$

up to an irrelevant overall phase convention.

On the other hand, the translation subgroup is generated by $N_1$ and $N_2$, so

$$
U(S(\alpha,\beta)) = e^{\,i\alpha N_1 + i\beta N_2}.
$$

Acting on the eigenstate $|\rho,\phi\rangle$ gives

$$
U(S(\alpha,\beta))|\rho,\phi\rangle
=
e^{\,i\rho(\alpha\cos\phi+\beta\sin\phi)}|\rho,\phi\rangle.
$$

So an arbitrary unitary irreducible representation of the massless little group is characterized by a non-negative number $\rho$:

- if $\rho>0$, the rotation moves us continuously around the circle of angles $\phi$, and the translation subgroup acts non-trivially by phases. This is the **continuous-spin** case;
- if $\rho=0$, then

$$
N_1 = N_2 = 0
$$

throughout the representation, so the translation subgroup acts trivially.

This second case is the one relevant for ordinary photons and, more generally, for the familiar massless particles of fixed helicity.

When $\rho=0$, the little group reduces effectively to the rotation subgroup $SO(2)$. Its unitary irreducible representations are one-dimensional, so for a one-particle helicity state with standard momentum $k$ we have

$$
U(W)|k,\sigma\rangle = e^{i\sigma \theta(W)} |k,\sigma\rangle,
$$

and

$$
U(S(\alpha,\beta))|k,\sigma\rangle = |k,\sigma\rangle.
$$

This is the precise sense in which:

- the rotation part acts by a phase,
- the translation part acts trivially.

It is **not** a consequence of unitarity alone. It is the consequence of taking the $\rho=0$ unitary irreducible representation of the massless little group, i.e. the discrete-helicity case rather than the continuous-spin case.

If parity is also imposed, then a state of helicity $\sigma$ must be accompanied by a state of helicity $-\sigma$. But again, parity is not what forces the translation part to be trivial.

This is crucial. The Hilbert space of a discrete-helicity massless particle only remembers helicity. But a Lorentz four-vector field will remember more structure than that.

## Step 4: choose polarization vectors at the standard momentum

Take the usual transverse polarization vectors at $k^\mu=(\kappa,0,0,\kappa)$:

$$
\epsilon_+^\mu(k)=\frac{1}{\sqrt{2}}(0,1,i,0),
\qquad
\epsilon_-^\mu(k)=\frac{1}{\sqrt{2}}(0,1,-i,0).
$$

They satisfy

$$
k_\mu \epsilon_\pm^\mu(k)=0.
$$

Now let us see how they transform under the little group.

### Rotation part

Under $R(\theta)$ one finds

$$
R(\theta)\epsilon_+^\mu(k)=e^{-i\theta}\epsilon_+^\mu(k),
\qquad
R(\theta)\epsilon_-^\mu(k)=e^{+i\theta}\epsilon_-^\mu(k).
$$

So far, so good: this is exactly the helicity behavior we expect.

### Translation part

Now comes the important calculation. Act with $S(\alpha,\beta)$ on $\epsilon_+^\mu(k)$:

$$
S(\alpha,\beta)\epsilon_+(k)
=
\frac{1}{\sqrt{2}}
\begin{pmatrix}
\alpha+i\beta \\
1 \\
i \\
\alpha+i\beta
\end{pmatrix}.
$$

Rewrite this as

$$
S(\alpha,\beta)\epsilon_+^\mu(k)
=
\epsilon_+^\mu(k)
+ \frac{\alpha+i\beta}{\sqrt{2}\,\kappa} k^\mu.
$$

Similarly,

$$
S(\alpha,\beta)\epsilon_-^\mu(k)
=
\epsilon_-^\mu(k)
+ \frac{\alpha-i\beta}{\sqrt{2}\,\kappa} k^\mu.
$$

This is the central fact.

The polarization vectors do **not** furnish a true two-dimensional representation of the little group. The translation part of the little group shifts them by something proportional to the null momentum $k^\mu$.

So already at the standard momentum we see the structure

$$
\epsilon^\mu \to \epsilon^\mu + c\, k^\mu.
$$

That is the seed of the gauge transformation.

## Step 5: go from the standard momentum to a generic momentum

Now take any null momentum

$$
p^\mu = (|\mathbf{p}|,\mathbf{p}).
$$

Choose a Lorentz transformation $L(p)$ such that

$$
L(p)k = p.
$$

One convenient choice is:

1. first boost along the $z$ direction,
2. then rotate the $z$ axis into the direction $\hat{\mathbf p}$.

If $\mathbf p$ has spherical angles $(\theta,\phi)$ and magnitude $|\mathbf p|$, define $\xi$ by

$$
e^\xi = \frac{|\mathbf p|}{\kappa}.
$$

Then

$$
B_z(\xi)=
\begin{pmatrix}
\cosh\xi & 0 & 0 & \sinh\xi \\
0 & 1 & 0 & 0 \\
0 & 0 & 1 & 0 \\
\sinh\xi & 0 & 0 & \cosh\xi
\end{pmatrix}
$$

satisfies

$$
B_z(\xi)k = (|\mathbf p|,0,0,|\mathbf p|).
$$

Now let

$$
R(\hat{\mathbf p}) = R_z(\phi)R_y(\theta),
$$

so that $R(\hat{\mathbf p})$ sends the $z$ axis into the direction $\hat{\mathbf p}$. Then we may take

$$
L(p)=R(\hat{\mathbf p})B_z(\xi),
$$

and indeed

$$
L(p)k = p.
$$

The polarization vectors for momentum $p$ are then defined by

$$
\epsilon_\pm^\mu(p)=L(p)^\mu{}_\nu \, \epsilon_\pm^\nu(k).
$$

## Step 6: the Weinberg little-group element $W(\Lambda,p)$

Given a general Lorentz transformation $\Lambda$, Weinberg defines

$$
W(\Lambda,p)=L^{-1}(\Lambda p)\,\Lambda\,L(p).
$$

This is one of the most important formulas in the whole argument.

Why?

Because it leaves $k$ invariant:

$$
W(\Lambda,p)k
=
L^{-1}(\Lambda p)\Lambda L(p)k
=
L^{-1}(\Lambda p)\Lambda p
=
k.
$$

So $W(\Lambda,p)$ belongs to the little group of the standard momentum.

This means that all the complicated Lorentz transformation properties at generic momentum are encoded in a little-group element acting at the standard momentum.

## Step 7: transform the polarization vectors

Now compute:

$$
\Lambda^\mu{}_\nu \epsilon_\pm^\nu(p)
=
\Lambda^\mu{}_\nu L(p)^\nu{}_\rho \epsilon_\pm^\rho(k).
$$

Insert the identity in the form $L(\Lambda p)L^{-1}(\Lambda p)$:

$$
\Lambda \epsilon_\pm(p)
=
L(\Lambda p)\,W(\Lambda,p)\,\epsilon_\pm(k).
$$

Now use the explicit action of the little group on $\epsilon_\pm(k)$:

$$
W(\Lambda,p)\epsilon_\pm^\mu(k)
=
e^{\mp i\theta(\Lambda,p)}\epsilon_\pm^\mu(k)
+ c_\pm(\Lambda,p)\,k^\mu,
$$

where $c_\pm(\Lambda,p)$ comes from the translation part of the little group.

Applying $L(\Lambda p)$ gives

$$
\Lambda \epsilon_\pm(p)
=
e^{\mp i\theta(\Lambda,p)}\, \epsilon_\pm(\Lambda p)
+ c_\pm(\Lambda,p)\, L(\Lambda p)k.
$$

But $L(\Lambda p)k = \Lambda p$, so finally

$$
\Lambda^\mu{}_\nu \epsilon_\pm^\nu(p)
=
e^{\mp i\theta(\Lambda,p)}\, \epsilon_\pm^\mu(\Lambda p)
+ c_\pm(\Lambda,p)\, (\Lambda p)^\mu.
$$

This is the precise statement we wanted.

The polarization vector transforms:

- as the expected helicity object,
- **plus** an extra term proportional to the momentum.

And now we see exactly where that term comes from: from the translation part of the massless little group.

## Step 8: why the extra term is harmless physically

Suppose the vector field couples to a conserved current $J^\mu$. Then the physical amplitude contains

$$
J_\mu \epsilon_\pm^\mu(p).
$$

If we shift the polarization by a multiple of the momentum,

$$
\epsilon_\pm^\mu(p)\to \epsilon_\pm^\mu(p)+c\, p^\mu,
$$

then the amplitude changes by

$$
c\, J_\mu p^\mu.
$$

But current conservation says

$$
p_\mu J^\mu = 0.
$$

So the shift by $p^\mu$ does not change the physical amplitude.

Therefore the physically relevant polarization is really an equivalence class

$$
\epsilon^\mu \sim \epsilon^\mu + c\, p^\mu.
$$

## Step 9: translate this into position space

Now expand a field operator in modes:

$$
A^\mu(x)\sim \sum_\sigma \int d\Pi_p
\left[
\epsilon^\mu(p,\sigma)a(p,\sigma)e^{-ipx}
+ \epsilon^{\mu *}(p,\sigma)a^\dagger(p,\sigma)e^{ipx}
\right].
$$

Since in momentum space the polarization picks up an extra term proportional to $p^\mu$, in position space the field picks up an extra derivative:

$$
p^\mu \leftrightarrow i\partial^\mu.
$$

Hence under Lorentz transformations the field must transform as

$$
U(\Lambda) A^\mu(x) U^{-1}(\Lambda)
=
{\Lambda^\mu}_\nu A^\nu(\Lambda x)
+ \partial^\mu \Omega(x,\Lambda),
$$

or equivalently, depending on conventions,

$$
A^\mu(x)\to {\Lambda^\mu}_\nu A^\nu(\Lambda^{-1}x)+\partial^\mu \Omega_\Lambda(x).
$$

That last term is exactly the gauge transformation.

## Why this is unavoidable

Let me summarize the logic in one chain:

1. A Lorentz-covariant local field $A_\mu$ has four components.
2. A massless helicity-1 particle has fewer physical degrees of freedom: one helicity if parity is not imposed, or two helicities $\pm 1$ if parity is imposed.
3. The little group of a massless particle is $ISO(2)$, not just $SO(2)$.
4. The translation part of $ISO(2)$ acts trivially on physical states but non-trivially on polarization vectors.
5. Explicitly, it shifts $\epsilon^\mu$ by a multiple of the null momentum.
6. Therefore a Lorentz-covariant vector field cannot transform as a strict four-vector on the physical Hilbert space.
7. The mismatch is resolved precisely by gauge redundancy.

So gauge symmetry here is not just an aesthetic principle. It is the mechanism that allows a manifestly Lorentz-covariant field to describe the correct unitary massless representation.

## Final remark

This is also why the field strength

$$
F_{\mu\nu}=\partial_\mu A_\nu-\partial_\nu A_\mu
$$

is often more directly physical than $A_\mu$ itself. The gauge-variant part of $A_\mu$ is exactly the redundant part required by Lorentz covariance.

So the correct final statement is:

$$
\text{massless helicity-1} + \text{Lorentz covariance} + \text{unitarity}
\Longrightarrow
A_\mu \text{ transforms up to } \partial_\mu \Omega.
$$

If parity is also a symmetry, then the physical spectrum contains both helicities $+1$ and $-1$. But parity is **not** what forces the gauge term. The gauge term is already forced by the little-group structure of a massless particle.

## References

- Steven Weinberg, *The Quantum Theory of Fields, Volume I*, Chapter 5.
- Mark Srednicki, *Quantum Field Theory*, sections on the photon and the little group.
- Matthew D. Schwartz, *Quantum Field Theory and the Standard Model*, chapters on massless spin-1 fields.
