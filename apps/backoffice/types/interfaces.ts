export interface Deploy {
    _id: string,
    repository_link: string,
    domain: string,
    status: string,
    commits: Commit[],
    lastCommit: number,
    source: string,
    createdAt: string,
    name_repo: string,
    name_project: string,
    env: boolean,
    terraform_output: string
};

export interface Commit {
    _id: string,
    time: string,
    previous: number
}

export interface User {
    githubId: string,
    name: string,
    email: string,
    deployments: number[],
    refresh_token: string
}
export interface InfoUser {
    user: User
    deployments: Deploy[]
}

export interface TerraformVar {
    do_token: string;
    pub_key: string;
    pvt_key: string;
    name_project: string;
    region: string;
    size: string;
    github_link: string;
    github_repo: string;
    docker_link: string;
    puerto: string;
    domain: string;
    pwd: string;
    email: string;
    github_branch: string;
    puerto_back: string,
    env: boolean,
    docker_command: string
    api_url: string,
    endpoint: string,
}

export interface EnvVariable {
    id: number,
    keyVar: string,
    valueVar: string
}

export interface EnvState {
    envList: EnvVariable[],
    terraformVar: TerraformVar,
    envString: string,
}

export interface Aprops {
    k: string
    v: string
}

export interface RepoVariable {
    name: string,
    created_at: Date,
    branches_url: string,
    clone_url: string,
    update_at: string,
    svn_url: string,
    default_branch: string,
    visibility: string,
}

export interface RepoState {
    repo_info: RepoVariable
    repo_id: number
}


export interface CommitVariable {
    sha: string,
    date: Date
}
