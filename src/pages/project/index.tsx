import {useEffect, useState} from "react";
import Project from "@/components/Card/Project";
import Spinner from "@/components/Spinner";
import IProject from "@/types/IProject";

const ProjectPage = () => {
    const [projects, setProjects] = useState<IProject[]>([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        fetchProjects()
    }, [])

    const fetchProjects = async () => {
        try {
            setIsLoading(true)
            const res = await fetch(`/api/projects`);
            const data = await res.json();
            setProjects(data)
        } catch (err) {

        } finally {
            setIsLoading(false)
        }
    }

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                    isLoading ? <Spinner /> :
                        projects.map(project => <Project key={project.name} project={project} />)
                }
            </div>
        </>
    )
}

export default ProjectPage