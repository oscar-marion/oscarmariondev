import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { ARTICLES_FOLDER } from "utils/Constants";

export class ArticlesLib {
    static getSlugs(): Array<any> {
        const postsPath = path.join(process.cwd(), ARTICLES_FOLDER);
        const filenames = fs.readdirSync(postsPath);

        return filenames.map((name) => {
            const fullPath = path.join(process.cwd(), ARTICLES_FOLDER, name);
            const file = fs.readFileSync(fullPath, "utf-8");
            const { data } = matter(file);
            return data;
        });
    }
    static getOne(params: any): any {
        const postPath = path.join(process.cwd(), ARTICLES_FOLDER, `${params.slug}.mdx`);
        const post = fs.readFileSync(postPath, "utf-8");
        const { content, data } = matter(post);
        return { content, data };
    }
}
