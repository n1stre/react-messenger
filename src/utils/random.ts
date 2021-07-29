export function randomText() {
  return randomArrayItem([
    "Soluta, quos officiis doloribus expedita maxime aperiam dolor voluptate tempora animi reprehenderit est, asperiores magni in totam tempore doloremque velit vel dignissimos.",
    "Ipsa deleniti explicabo ducimus molestias nisi quo cum corrupti fugit atque excepturi, sit, deserunt dicta! Obcaecati dolores adipisci odit itaque suscipit! Exercitationem.",
    "Ipsam harum doloribus nobis praesentium deserunt odit iure modi voluptatibus reiciendis culpa dignissimos assumenda laborum ea quisquam aut possimus repellendus, odio animi.",
    "Error natus alias ducimus harum est veniam dicta quos optio. Quam libero impedit nihil laboriosam quae delectus harum obcaecati commodi sapiente est.",
    "Similique, quas! Necessitatibus unde, temporibus dignissimos, itaque cupiditate id illum, animi perspiciatis nostrum officiis molestias. Delectus cum provident doloremque qui? At, minima.",
    "Mollitia dolor placeat excepturi libero unde impedit doloremque fuga alias, ullam doloribus ducimus molestias assumenda quibusdam exercitationem modi illo praesentium repellat! Nihil!",
    "Reprehenderit eaque maxime repellendus, eum, dicta doloremque recusandae rerum maiores tenetur distinctio optio fugit aut tempora modi quos, suscipit sapiente molestias labore.",
    "Nostrum, alias illo! Minus molestiae suscipit blanditiis! In quasi autem non illo optio possimus officiis, voluptatem quas vel consectetur dolores rem? Incidunt.",
    "Suscipit, dolore doloremque doloribus saepe amet dignissimos, praesentium placeat assumenda minima similique vitae nulla debitis? Ullam corrupti ad nisi! Sit, perferendis nesciunt.",
    "Laudantium, facere nihil quo quam adipisci ratione sit eligendi culpa vel laborum! Molestiae voluptate deleniti esse nesciunt obcaecati! Perspiciatis facilis eum iusto?",
    "Quo, suscipit eaque iure assumenda quia, doloremque ex illum quidem magni earum repellat veniam minima sit ut! Aut expedita distinctio cupiditate iure?",
    "Enim, nihil dolor corporis explicabo id laborum ab neque odit nam minus quia similique cupiditate nulla adipisci voluptatibus optio ad. Possimus, enim.",
    "Facere quod modi magni neque nulla quaerat. Dolores impedit aliquam at est possimus architecto quisquam vitae. Eos qui veniam velit exercitationem deleniti?",
  ]);
}

export function randomAuthorName() {
  return randomArrayItem([
    "John Doe",
    "David Lynch",
    "Kim Gordon",
    "Aphex Twin",
    "Facebook Support Team",
  ]);
}

export function randomImageUrl() {
  return randomArrayItem(
    Array.from({ length: 19 }, (_, i) => `/img/${i + 1}.png`),
  );
}

export function randomArrayItem(arr: any[]) {
  return arr[randomNumber(arr.length)];
}

export function randomNumber(limit: number) {
  return Math.floor(Math.random() * limit);
}
