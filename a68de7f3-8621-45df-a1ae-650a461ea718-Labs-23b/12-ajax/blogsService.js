var blogsService = {
    endpoint: "https://api.remotebootcamp.dev/api/blogs"
};




blogsService.getAll = () => {
    console.log("getBlog is executing");
    const config = {
        method: "GET",
        url: blogsService.endpoint ,
        crossdomain: true,
        headers: {"Content-Type": "application/json"}
    };
    return axios(config);
}

blogsService.add = (payload) => {
    console.log("addBlog is executing", payload);

    const config={
        method:"POST",
        url: blogsService.endpoint,
        data: payload,
        crossdomain: true,
        headers: {"Content-Type": "application/json"}
    };
    return axios(config)

}

blogsService.getById = (id) => {
    console.log("getById is executing", id);
    var blogId = 572966501; 

        const config={
            method:"GET"
            , url: blogsService.endpoint + id
            , data: id
            , crossdomain: true
            , headers: {"Content-Type": "application/json"}
        }
        return axios(config)
}

blogsService.update = (id, payload) => {
    console.log("update is executing", payload)

    const config={
        method: "PUT"
        ,url: blogsService.endpoint + id
        , data: payload
        ,crossdomain: true
        ,headers: {"Content-Type": "application/json"}
    }
    return axios(config)
}

blogsService.deleteById = (id) => {
    console.log("deleteById is executing", id);

    const config= {
        method: "DELETE",
        url: `${blogsService.endpoint}/${id}`,
        crossdomain: true,
        headers: {"Content-Type": "application/json"},
    }
    return axios(config).then(() => {
        return id
        
        
    });
   }
