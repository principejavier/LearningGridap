## Runing problems with Gridap without plugins

The script [poisson.jl](./poisson.jl) solves the Poisson problem in a unit square using [Gridap.jl](https://github.com/gridap/Gridap.jl). Before runing this case, Gridap has to be installed, which can be done instantiating this repo. The steps are as follows.

1. Enter into the 'NoPlugins' folder and open a Julia REPL
    ```
    $ cd NoPlugins
    $ julia --project=.
                   _
       _       _ _(_)_     |  Documentation: https://docs.julialang.org
      (_)     | (_) (_)    |
       _ _   _| |_  __ _   |  Type "?" for help, "]?" for Pkg help.
      | | | | | | |/ _` |  |
      | | |_| | | | (_| |  |  Version 1.11.1 (2024-10-16)
     _/ |\__'_|_|_|\__'_|  |  Official https://julialang.org/ release
    |__/                   |

    julia> 
    ```
    the options '--project=.' set the current directory as a [local environment](https://pkgdocs.julialang.org/v1/environments/), equivalent to use activate in the pkg mode (see below).

2. Instantiate the environment. This will automatically download all required packages, [Gridap.jl](https://github.com/gridap/Gridap.jl) in this case. This is done in the pkg mode of the prompt. Learn about [prompt modes](https://docs.julialang.org/en/v1/stdlib/REPL/#The-different-prompt-modes) if you need it.
    ```
    # Type ] to enter in pkg mode
    (NoPlugins) pkg> instantiate
    ```

3. Run the script. There are two options
    1. copy the contents of the file into the REPL
    2. include the contents using
        ```
        # Use the backspace key to return to Julian mode
        include("poisson.jl")
        ```

4. If you are using [Visual Studio Code](https://code.visualstudio.com/) install the [Julia extension](https://www.julia-vscode.org/). This extension includes an integrated REPL, which can be started from the Command Palette (in the View menu, also activated with the shorcut Ctrl-Shift-p) with the command `Jula: start REPL`. There are several options to [run the code](https://www.julia-vscode.org/docs/stable/userguide/runningcode/) and to [debug](https://www.julia-vscode.org/docs/stable/userguide/debugging/).
   
5. The script [poisson.jl](./poisson.jl), the forcing term [is defined](./poisson.jl#L14) such that the exact solution of the problem is a [given function](./poisson.jl#L4). Feel free to experiment changing it with or without [automatic differentiation](https://en.wikipedia.org/wiki/Automatic_differentiation), see commented code.
   
6. After execution the file `results.vtu` is generated to visualize using Paraview.
   
