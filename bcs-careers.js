// BCS careers listings. Update role details here when positions are ready to publish.
const bcsCareers = [
  {title: "Senior Marketing Strategist", location: "Washington, DC", description: "Lead marketing strategies that strengthen brand visibility, expand our reach, and support business growth."},
  {title: "Business Development Manager", location: "Washington, DC", description: "Identify new clients, build strategic relationships, and pursue opportunities that grow BCS."},
  {title: "Acquisition Specialist", location: "Washington, DC", description: "Research contracting opportunities and support acquisition activities, proposals, solicitations, and contract requirements."},
  {title: "Training Specialist", location: "Washington, DC", description: "Design and deliver training programs, develop instructional materials, and facilitate engaging workshops."}
];
const careerList = document.getElementById("career-list");
if (careerList) {
  bcsCareers.forEach((job) => {
    const card = document.createElement("article");
    card.className = "career-card";
    const title = document.createElement("h2"); title.textContent = job.title;
    const location = document.createElement("div"); location.className = "location"; location.textContent = job.location;
    const description = document.createElement("p"); description.textContent = job.description;
    const link = document.createElement("a"); link.textContent = "Apply";
    link.href = "#application";
    link.addEventListener("click", () => {
      const select = document.getElementById("application-role");
      if (select) select.value = job.title;
    });
    card.append(title, location, description, link); careerList.append(card);
  });
}
