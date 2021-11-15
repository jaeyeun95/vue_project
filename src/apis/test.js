import instance from "./https";

// 메소드
export async function getList() {
  return instance.get("/api/unknown");
}

export async function create(data){
  return instance.post("/api/users", data);
}
