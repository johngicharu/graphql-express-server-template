import { getRepository, getConnection } from "typeorm";
import { Post } from "../entity/Post";

export default async () => {
  const postsRepository = getRepository(Post);

  const testerPost = await postsRepository.findOne({
    where: { title: "Tester" },
  });

  if (!testerPost) {
    const tester = new Post();

    tester.title = "Tester";

    try {
      await postsRepository.save(tester);
      return console.log("Tester post created");
    } catch (err) {
      return console.log(err);
    }
  } else {
    return console.log("Tester post present");
  }
};
