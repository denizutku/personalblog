package com.deniz.blog;

import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("posts")
public class PostController {

    private final PostService postService;

    public PostController(PostService postService) {
        this.postService = postService;
    }

    @GetMapping
    List<Post> index() {
        return postService.getAllPosts();
    }

    @PostMapping(value="", consumes={"application/json"})
    Post create(@RequestBody Post newPost) {
        return postService.savePost(newPost);
    }

    @GetMapping("/{id}")
    Post show(@PathVariable Long id) {
        return postService.getPostById(id);
    }

    @DeleteMapping("/{id}")
    void delete(@PathVariable Long id) {
        postService.deletePostById(id);
    }
}
