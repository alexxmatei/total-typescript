import { Equal, Expect } from "./helpers/type-utils";

/**
 * Here, the id property is shared between all three
 * interfaces. Can you find a way to refactor this to
 * make it more DRY?
 */

interface IdObj {
  id: string;
}

interface User extends IdObj {
  firstName: string;
  lastName: string;
}

interface Post extends IdObj {
  title: string;
  body: string;
}

interface Comment extends IdObj {
  id: string;
  comment: string;
}

type tests = [
  Expect<Equal<User, { id: string; firstName: string; lastName: string }>>,
  Expect<Equal<Post, { id: string; title: string; body: string }>>,
  Expect<Equal<Comment, { id: string; comment: string }>>
];
