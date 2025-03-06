using Gridap

# Define a manufactured solution u. 
u(x) = x[1] + x[2]

# If lines 8 to 12 are commented automatic differentation
# is used to compute f in line 14
import Gridap: ∇, Δ
gradu(x) = VectorValue(2*x[1],2*x[2])
d2u(x) = 4.0
∇(::typeof(u)) = gradu
Δ(::typeof(u)) = d2u

f(x) = - Δ(u)(x)

# Construct the discrete model
n = 4
domain = (0,1,0,1)
partition = (n,n)
model = CartesianDiscreteModel(domain, partition)

# Construct the FEspace
order = 1
reffe = ReferenceFE(lagrangian, Float64, order)
V = TestFESpace(model,reffe,dirichlet_tags="boundary")
U = TrialFESpace(V,u)

# Define integration mesh and quadrature
degree = 2
Ω = Triangulation(model)
dΩ = Measure(Ω,degree)

a(u,v) = ∫(∇(v)⋅∇(u))dΩ
b(v) = ∫(v*f)dΩ

op = AffineFEOperator(a,b,U,V)
uh = solve(op)
eh = u - uh

# Define norms to measure the error
l2(w) = ∫(w*w)dΩ
h1(w) = a(w,w) + l2(w)

# Compute errors
@show el2 = sqrt(sum(l2(eh)))
@show eh1 = sqrt(sum(h1(eh)))

# Only if the solution is a linear function
# @assert el2 < 1.e-8
# @assert eh1 < 1.e-8

# Write the numerical solution, the manufactured solution, 
# and the error in a vtu file
writevtk(Ω,"results",cellfields=["uh"=>uh,"u"=>u,"eh"=>eh])
