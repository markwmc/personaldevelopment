var entitiesService = {
  endpoint: "https://api.remotebootcamp.dev/api/entities/tests",
};

entitiesService.getAll = () => {
  console.log("getEntities is executing");

  const config = {
    method: "GET",
    url: entitiesService.endpoint,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

entitiesService.getById = (id) => {
  console.log("getEntitiesById is executing", id);
  const config = {
    method: "GET",
    url: `${entitiesService.endpoint}/${id}`,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

entitiesService.add = (payload) => {
  console.log("addEntity is executing", payload);
  const config = {
    method: "POST",
    url: entitiesService.endpoint,
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config).then((response) => {
    return { ...payload, id: response.data.item };
  });
};

entitiesService.update = (id, payload) => {
  console.log("update is executing", payload);

  const config = {
    method: "PUT",
    url: `${entitiesService.endpoint}/${id}`,
    data: payload,
    crossdoman: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config).then(() => {
    return payload;
  });
};

entitiesService.deleteById = (id) => {
  console.log("deleteById is executing", id);

  const config = {
    method: "DELETE",
    url: `${entitiesService.endpoint}/${id}`,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config).then(() => {
    return id;
  });
};
