var documenterSearchIndex = {"docs":
[{"location":"NoPlugins/#Solving-PDEs-with-Cartesian-grids-using-Gridap-without-plugins","page":"Solving PDEs with Cartesian grids using Gridap without plugins","title":"Solving PDEs with Cartesian grids using Gridap without plugins","text":"","category":"section"},{"location":"NoPlugins/","page":"Solving PDEs with Cartesian grids using Gridap without plugins","title":"Solving PDEs with Cartesian grids using Gridap without plugins","text":"The script poisson.jl solves the Poisson problem in a unit square using Gridap.jl. Before runing this case, Gridap has to be installed, which can be done instantiating this repo. The steps are as follows.","category":"page"},{"location":"NoPlugins/","page":"Solving PDEs with Cartesian grids using Gridap without plugins","title":"Solving PDEs with Cartesian grids using Gridap without plugins","text":"Enter into the 'NoPlugins' folder and open a Julia REPL. The options --project=. set the current directory as a local environment, equivalent to use activate in the pkg mode (see below).","category":"page"},{"location":"NoPlugins/","page":"Solving PDEs with Cartesian grids using Gridap without plugins","title":"Solving PDEs with Cartesian grids using Gridap without plugins","text":"$ cd NoPlugins\n$ julia --project=.\n               _\n   _       _ _(_)_     |  Documentation: https://docs.julialang.org\n  (_)     | (_) (_)    |\n   _ _   _| |_  __ _   |  Type \"?\" for help, \"]?\" for Pkg help.\n  | | | | | | |/ _` |  |\n  | | |_| | | | (_| |  |  Version 1.11.1 (2024-10-16)\n _/ |\\__'_|_|_|\\__'_|  |  Official https://julialang.org/ release\n|__/                   |\n\njulia> ","category":"page"},{"location":"NoPlugins/","page":"Solving PDEs with Cartesian grids using Gridap without plugins","title":"Solving PDEs with Cartesian grids using Gridap without plugins","text":"Instantiate the environment. This will automatically download all required packages, Gridap.jl in this case. This is done in the pkg mode of the prompt. Learn about prompt modes if you need it.","category":"page"},{"location":"NoPlugins/","page":"Solving PDEs with Cartesian grids using Gridap without plugins","title":"Solving PDEs with Cartesian grids using Gridap without plugins","text":"# Type ] to enter in pkg mode\n(NoPlugins) pkg> instantiate","category":"page"},{"location":"NoPlugins/","page":"Solving PDEs with Cartesian grids using Gridap without plugins","title":"Solving PDEs with Cartesian grids using Gridap without plugins","text":"Run the script. There are two options","category":"page"},{"location":"NoPlugins/","page":"Solving PDEs with Cartesian grids using Gridap without plugins","title":"Solving PDEs with Cartesian grids using Gridap without plugins","text":"copy the contents of the file into the REPL\ninclude the contents using","category":"page"},{"location":"NoPlugins/","page":"Solving PDEs with Cartesian grids using Gridap without plugins","title":"Solving PDEs with Cartesian grids using Gridap without plugins","text":"# Use the backspace key to return to Julian mode\ninclude(\"poisson.jl\")","category":"page"},{"location":"NoPlugins/","page":"Solving PDEs with Cartesian grids using Gridap without plugins","title":"Solving PDEs with Cartesian grids using Gridap without plugins","text":"If you are using Visual Studio Code install the Julia extension. This extension includes an integrated REPL, which can be started from the Command Palette (in the View menu, also activated with the shorcut Ctrl-Shift-p) with the command Jula: start REPL. There are several options to run the code and to debug.","category":"page"},{"location":"NoPlugins/","page":"Solving PDEs with Cartesian grids using Gridap without plugins","title":"Solving PDEs with Cartesian grids using Gridap without plugins","text":"The script poisson.jl, the forcing term is defined such that the exact solution of the problem is a given function. Feel free to experiment changing it with or without automatic differentiation, see commented code.","category":"page"},{"location":"NoPlugins/","page":"Solving PDEs with Cartesian grids using Gridap without plugins","title":"Solving PDEs with Cartesian grids using Gridap without plugins","text":"After execution the file results.vtu is generated to visualize using Paraview.","category":"page"},{"location":"#LearningGridap","page":"Home","title":"LearningGridap","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"This repo contains some introductory notes to learn Gridap.jl that complement Gridap tutorials. The target is on users having basic knowledge of Julia so detailed steps and some instructions on installation of packages in the Gridap ecosystem, the so called plugins, are included. It also contains several notes and tests made while learning Gridap and it is being used to learn how to admin a repo (documentation, CI, etc.).","category":"page"},{"location":"","page":"Home","title":"Home","text":"The first step is to clone this repo","category":"page"},{"location":"","page":"Home","title":"Home","text":"$ git clone https://github.com/principejavier/LearningGridap","category":"page"},{"location":"","page":"Home","title":"Home","text":"and then follow the instructions on each section.","category":"page"}]
}
