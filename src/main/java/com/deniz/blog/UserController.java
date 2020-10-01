package com.deniz.blog;

import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    List<User> index() {
        return userService.getAllUsers();
    }

    @PostMapping
    User create(@RequestBody User newUser) {
        return userService.saveUser(newUser);
    }

    @GetMapping("/{id}")
    User show(@PathVariable Long id) {
        return userService.getUserById(id);
    }

    @DeleteMapping("/{id}")
    void delete(@PathVariable Long id) {
        userService.deleteUserById(id);
    }

}
