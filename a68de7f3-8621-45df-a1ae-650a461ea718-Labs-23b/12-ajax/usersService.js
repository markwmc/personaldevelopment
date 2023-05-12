var usersService = {
  endpoint: "https://api.remotebootcamp.dev/api/users",
};

var testLoginPayload = {
  email: "mark.mcclallen1@gmail.com",
  password: "P@sSw0rd!23",
  tenantId: "U04K510BV5H",
};
usersService.userLogin = (payload) => {
  const config = {
    method: "POST",
    url: usersService.endpoint + "/login",
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};
