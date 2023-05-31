const express = require("express");
const router = express.Router();

router.get("/display_all_employees", (req, res) => {
    const userData = [
		{
			name: "John Doe",
			age: 28,
			email: "johndoe@example.com",
			company: {
				name: "ABC Corp",
				address: "123 Main St",
				city: "New York",
				country: "USA",
			},
			skills: ["JavaScript", "HTML", "CSS"],
			projects: [
				{
					name: "Project A",
					description: "Lorem ipsum dolor sit amet",
				},
				{
					name: "Project B",
					description: "Consectetur adipiscing elit",
				},
			],
		},
		{
			name: "Jane Smith",
			age: 32,
			email: "janesmith@example.com",
			company: {
				name: "XYZ Inc",
				address: "456 Elm St",
				city: "San Francisco",
				country: "USA",
			},
			skills: ["Python", "Java", "SQL"],
			projects: [
				{
					name: "Project X",
					description: "Sed do eiusmod tempor incididunt",
				},
				{
					name: "Project Y",
					description: "Ut labore et dolore magna aliqua",
				},
			],
		},
		{
			name: "Michael Johnson",
			age: 24,
			email: "michaeljohnson@example.com",
			company: {
				name: "123 Industries",
				address: "789 Oak St",
				city: "London",
				country: "UK",
			},
			skills: ["Ruby", "C#", "React"],
			projects: [
				{
					name: "Project M",
					description: "Aliquam erat volutpat",
				},
				{
					name: "Project N",
					description: "Fusce dapibus tellus ac cursus",
				},
			],
		},
		// Add more user objects if needed
	];
    res.render("./dashboard/dashboard.ejs", {
        userData: userData
    })
})

module.exports = router;
