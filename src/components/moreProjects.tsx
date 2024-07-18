const MoreProjects = () =>{
    return(
        <>
            <div style={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'row', 
                boxShadow: '10px 15px 20px #09c6ff', paddingBottom:'150px', paddingTop:'150px', columnGap:'150px', rowGap:'50px'}}>
                <p className="TextTitle" style={{width: '300px'}}>
                    check out my other projects on my <a href="https://github.com/mialarkin14">github</a>
                </p>
                <a href="https://github.com/mialarkin14" target="_blank" ><img src="src/assets/navbar/git.png" alt="github" 
                className="git"/></a>
            </div>
        </>
    )
}

export default MoreProjects