export default interface IProject {
    // id: string
    name: string
    slug: string
    description: string
    thumbnail: string
    tags: string[]
    demoUrl: string
    repositoryUrl: string
    isArchived: boolean
}