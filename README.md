# Running the application

You should have docker installed. Simply running `docker compose up` in the root directory should spin up 3 containers - the web server, a MySQL database, and a container hosting the CRA toolchain. This is to avoid polluting the host machine and hopefully enabling portability. Once all containers are running you should then be able to visit localhost:3001 in your browser to view the app.

# Notes

I have spent more than the expected 2-3 hours on this project. While the app does not meet all the requirements of the assignment, I think it sufficiently demonstrates my capability. The remaining work is mostly continuation of the work I have already completed - I'll describe what is left here:

First, I did not use sagas, mostly because they are new to me and I don't fully understand them. I did use redux. From what I can gather about sagas, I would need to make a configuration change when setting up redux toolkit. I believe it would also replace my usages of createAsyncThunk with generators.

Second, I did not create individual video pages. This would involve seting up a router and creating a component that would be populated with the video data. From the cards themselves we would redirect to the page using url routing. Then we can populate the video page using the identifier from the url to query the backend for data. Embedding the video itself poses another challenge. I think we could dynamically generate the iframe tag for embedding but I'm not entirely sure what would be involved.

The stretch requirements simply involve fleshing out the remaining crud endpoints and hooking them up to the videos reducer + creating the appropriate forms. Nestjs has a nice cli tool for generating the crud functions but I deleted them once I knew I didn't have time to implement them. Similarly this would have also taken me some time to lay out the UX elements. Maybe I would have added an x in the upper right hand corner of the card for deletion and a hamburger icon for editing. I added some form validation to the create endpoint but it doesn't check the url is valid. The backend doesn't do it either. I like using Zod for schema validation but I'm sure there are other tools that would do the job just as well.

My frontend is certainly not the most stylish either. My css and html skills have always been bolstered by a product designer who handles most of the layouts and pixel perfect alignment. What I developed was purely functional but could be done muich better with things like styling and reactivity in mind.

I also would have liked to spend more time cleaning up the codebase - adding things like linting, a fully containerized development workflow, and more robust documentation. I also cut some corners with the project structure and coding conventions - error handling especially. While not as important to the functionality of the app, I pride myself on writing readable and well organized code.


