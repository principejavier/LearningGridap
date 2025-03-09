using Documenter

sources = [
    "NoPlugins/README.md"
]

docs = [
    "src/NoPlugins.md"
]

mkpath(joinpath(@__DIR__,"src"))

# Make the index.md file
index_src = joinpath(@__DIR__,"..","README.md")
index_dst = joinpath(@__DIR__,"src","index.md")
str = open(io->read(io,String),index_src)
write(index_dst,str[1:minimum(findfirst("# Contents",str))-1])

# Process sections
for (s,d) in zip(sources,docs)
    src = joinpath(@__DIR__,"..",s)
    dst = joinpath(@__DIR__,d)
    # println("Source ",src)
    # println("Destination ",dst)
    write(dst,replace(open(io->read(io,String),src),"(./"=>"(https://github.com/principejavier/LearningGridap/docs/build/"))
end

makedocs(;
    authors="Javier Principe",
    sitename="LearningGridap",
    format=Documenter.HTML(),
    pages=[
        "Home" => "index.md",
        "NoPlugins.md",
    ],
)

deploydocs(;
    repo="github.com/principejavier/LearningGridap"
)
