const page = ({params}: {
    params: {
        projectId: string
    }
}) => {
    return (
        <div>
            <h1>Instructions</h1>
            <p>Here are the instructions for your project {params.projectId}</p>
            <code></code>
        </div>
    )
}

export default page