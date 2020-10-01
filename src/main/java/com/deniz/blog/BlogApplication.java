package com.deniz.blog;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@SpringBootApplication
public class BlogApplication implements CommandLineRunner {

	private final UserService userService;
	private final PostService postService;

	public BlogApplication(UserService userService, PostService postService) {
		this.userService = userService;
		this.postService = postService;
	}

	public static void main(String[] args) {
		SpringApplication.run(BlogApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

		User user = new User("Deniz Utku Beydogan","denizutku","password");
		userService.saveUser(user);
		Post postOne = new Post("Header One","Context One",user);
		Post postTwo = new Post("Header Two","Context Two",user);
		Post postThree = new Post("Header Three","Context Three",user);
		Post postFour = new Post("Header Four","Context Four",user);
		postService.savePost(postOne);
		postService.savePost(postTwo);
		postService.savePost(postThree);
		postService.savePost(postFour);
	}

	@Configuration
	@EnableWebMvc
	public class WebConfig extends WebMvcConfigurerAdapter {

		@Override
		public void addCorsMappings(CorsRegistry registry) {
			registry.addMapping("/**")
					.allowedMethods("HEAD", "GET", "PUT", "POST", "DELETE", "PATCH");
		}
	}
}
