var JQStarterTasksService = {
  endpoint: "https://api.remotebootcamp.dev/api/users",
};
console.log("JQStarterTasksService is firing...");

JQStarterTasksService.registerUser = (payload) => {
  const config = {
    method: "POST",
    url: JQStarterTasksService.endpoint + "/register",
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

JQStarterTasksService.loginUser = (payload) => {
  const config = {
    method: "POST",
    url: JQStarterTasksService.endpoint + "/login",
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

JQStarterTasksService.getCurrentUser = () => {
  console.log("getCurrentUser is firing...");
  const config = {
    method: "GET",
    url: JQStarterTasksService.endpoint + "/current",
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

JQStarterTasksService.getById = (id) => {
  console.log("GetUserById is firing...");
  const config = {
    method: "GET",
    url: `${JQStarterTasksService.endpoint}/${id}`,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

JQStarterTasksService.userLogout = () => {
  console.log("userLogout is firing...");
  const config = {
    method: "GET",
    url: JQStarterTasksService.endpoint + "/logout",
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};
