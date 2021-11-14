import instance from "./https";

// 메소드
export async function getList() {
  return instance.get("/api/unknown");
}
