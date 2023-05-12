var peopleService = {
    endpoint: "https://api.remotebootcamp.dev/api/people"

}

peopleService.getPage = (pageIndex, pageSize) => {
    console.log("getPage is executing");
    const config = {
        method: "GET"
        , url: peopleService.endpoint + "/paginate?pageIndex=0&pageSize=10"
        , crossdomain: true
        , headers: {"Content-Type": "application/json"}
    };
    return axios(config)

}