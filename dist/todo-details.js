const db = {
  users: [
    { user_id: 1, name: "Nafeez Mahdi", email: "nafeez@example.com" },
    { user_id: 2, name: "Rahim Uddin", email: "rahim@example.com" },
    { user_id: 3, name: "Ayesha Khan", email: "ayesha@example.com" },
    { user_id: 4, name: "Sadia Akter", email: "sadia@example.com" },
    { user_id: 5, name: "Tanvir Hasan", email: "tanvir@example.com" },
    { user_id: 6, name: "Farhana Rahman", email: "farhana@example.com" },
    { user_id: 7, name: "Imran Hossain", email: "imran@example.com" },
    { user_id: 8, name: "Nusrat Jahan", email: "nusrat@example.com" },
    { user_id: 9, name: "Mehedi Alam", email: "mehedi@example.com" },
    { user_id: 10, name: "Ritu Sultana", email: "ritu@example.com" },
  ],
  categories: [
    { category_id: 1, name: "Work" },
    { category_id: 2, name: "Personal" },
    { category_id: 3, name: "Study" },
    { category_id: 4, name: "Health" },
  ],
  statuses: [
    { status_id: 1, status: "Pending" },
    { status_id: 2, status: "In Progress" },
    { status_id: 3, status: "Completed" },
  ],
  priorities: [
    { priority_id: 1, level: "Low" },
    { priority_id: 2, level: "Medium" },
    { priority_id: 3, level: "High" },
  ],
  todos: [
    {
      todo_id: 101,
      title: "Finish React project",
      description: "Complete dashboard UI and API integration",
      user_id: 1,
      category_id: 1,
      status_id: 2,
      priority_id: 3,
      due_date: "2026-05-10",
    },
    {
      todo_id: 102,
      title: "Study ERD concepts",
      description: "Practice drawing ER diagrams",
      user_id: 1,
      category_id: 3,
      status_id: 1,
      priority_id: 2,
      due_date: "2026-05-08",
    },
    {
      todo_id: 103,
      title: "Buy groceries",
      description: "Milk, eggs, vegetables",
      user_id: 2,
      category_id: 2,
      status_id: 1,
      priority_id: 1,
      due_date: "2026-05-06",
    },
    {
      todo_id: 104,
      title: "Gym workout",
      description: "Leg day training",
      user_id: 3,
      category_id: 4,
      status_id: 2,
      priority_id: 2,
      due_date: "2026-05-07",
    },
    {
      todo_id: 105,
      title: "Prepare presentation",
      description: "Slides for client meeting",
      user_id: 2,
      category_id: 1,
      status_id: 3,
      priority_id: 3,
      due_date: "2026-05-04",
    },
    {
      todo_id: 106,
      title: "Review pull requests",
      description: "Check open PRs and leave review notes",
      user_id: 3,
      category_id: 1,
      status_id: 1,
      priority_id: 2,
      due_date: "2026-05-12",
    },
    {
      todo_id: 107,
      title: "Morning run",
      description: "30 minute cardio run in park",
      user_id: 3,
      category_id: 4,
      status_id: 2,
      priority_id: 1,
      due_date: "2026-05-09",
    },
    {
      todo_id: 108,
      title: "Organize desk",
      description: "Clean desk and arrange office supplies",
      user_id: 4,
      category_id: 2,
      status_id: 1,
      priority_id: 1,
      due_date: "2026-05-11",
    },
    {
      todo_id: 109,
      title: "Complete TypeScript tutorial",
      description: "Finish modules on generics and utility types",
      user_id: 4,
      category_id: 3,
      status_id: 2,
      priority_id: 2,
      due_date: "2026-05-14",
    },
    {
      todo_id: 110,
      title: "Team standup summary",
      description: "Write and share standup summary with team",
      user_id: 5,
      category_id: 1,
      status_id: 3,
      priority_id: 2,
      due_date: "2026-05-06",
    },
    {
      todo_id: 111,
      title: "Read book chapter",
      description: "Read one chapter of productivity book",
      user_id: 5,
      category_id: 2,
      status_id: 1,
      priority_id: 1,
      due_date: "2026-05-13",
    },
    {
      todo_id: 112,
      title: "Plan weekly study goals",
      description: "Prepare a study checklist for next week",
      user_id: 6,
      category_id: 3,
      status_id: 2,
      priority_id: 2,
      due_date: "2026-05-10",
    },
    {
      todo_id: 113,
      title: "Doctor appointment follow-up",
      description: "Collect test report and update records",
      user_id: 6,
      category_id: 4,
      status_id: 1,
      priority_id: 3,
      due_date: "2026-05-15",
    },
    {
      todo_id: 114,
      title: "Fix navbar issue",
      description: "Resolve responsive alignment bug on mobile",
      user_id: 7,
      category_id: 1,
      status_id: 2,
      priority_id: 3,
      due_date: "2026-05-09",
    },
    {
      todo_id: 115,
      title: "Renew internet bill",
      description: "Pay monthly broadband bill online",
      user_id: 7,
      category_id: 2,
      status_id: 1,
      priority_id: 2,
      due_date: "2026-05-08",
    },
    {
      todo_id: 116,
      title: "Practice SQL joins",
      description: "Solve 20 SQL join problems",
      user_id: 8,
      category_id: 3,
      status_id: 2,
      priority_id: 2,
      due_date: "2026-05-16",
    },
    {
      todo_id: 117,
      title: "Yoga session",
      description: "Attend evening flexibility class",
      user_id: 8,
      category_id: 4,
      status_id: 3,
      priority_id: 1,
      due_date: "2026-05-05",
    },
    {
      todo_id: 118,
      title: "Create sprint backlog",
      description: "Add user stories for sprint planning",
      user_id: 9,
      category_id: 1,
      status_id: 1,
      priority_id: 3,
      due_date: "2026-05-11",
    },
    {
      todo_id: 119,
      title: "Buy gift for friend",
      description: "Choose and order birthday gift",
      user_id: 9,
      category_id: 2,
      status_id: 2,
      priority_id: 1,
      due_date: "2026-05-12",
    },
    {
      todo_id: 120,
      title: "Revise data structures",
      description: "Review trees and graph algorithms",
      user_id: 10,
      category_id: 3,
      status_id: 1,
      priority_id: 3,
      due_date: "2026-05-17",
    },
    {
      todo_id: 121,
      title: "Meal prep",
      description: "Prepare healthy meals for 3 days",
      user_id: 10,
      category_id: 4,
      status_id: 2,
      priority_id: 2,
      due_date: "2026-05-10",
    },
  ],
  subtasks: [
    { subtask_id: 1, todo_id: 101, title: "Design UI", is_completed: false },
    { subtask_id: 2, todo_id: 101, title: "Connect API", is_completed: false },
    { subtask_id: 3, todo_id: 102, title: "Read ERD notes", is_completed: true },
    { subtask_id: 4, todo_id: 104, title: "Warm-up", is_completed: true },
    { subtask_id: 5, todo_id: 106, title: "Review coding standards", is_completed: false },
    { subtask_id: 6, todo_id: 109, title: "Finish generic constraints section", is_completed: true },
    { subtask_id: 7, todo_id: 114, title: "Test on small devices", is_completed: false },
    { subtask_id: 8, todo_id: 120, title: "Solve 5 tree problems", is_completed: false },
  ],
  tags: [
    { tag_id: 1, name: "Urgent" },
    { tag_id: 2, name: "Home" },
    { tag_id: 3, name: "Exam" },
    { tag_id: 4, name: "Fitness" },
  ],
  todoTags: [
    { todo_id: 101, tag_id: 1 },
    { todo_id: 102, tag_id: 3 },
    { todo_id: 103, tag_id: 2 },
    { todo_id: 104, tag_id: 4 },
    { todo_id: 114, tag_id: 1 },
    { todo_id: 115, tag_id: 2 },
    { todo_id: 116, tag_id: 3 },
    { todo_id: 117, tag_id: 4 },
    { todo_id: 118, tag_id: 1 },
    { todo_id: 119, tag_id: 2 },
    { todo_id: 120, tag_id: 3 },
    { todo_id: 121, tag_id: 4 },
  ],
  reminders: [
    { reminder_id: 1, todo_id: 101, reminder_time: "2026-05-09 10:00" },
    { reminder_id: 2, todo_id: 103, reminder_time: "2026-05-06 08:00" },
    { reminder_id: 3, todo_id: 104, reminder_time: "2026-05-07 06:00" },
    { reminder_id: 4, todo_id: 114, reminder_time: "2026-05-09 10:30" },
    { reminder_id: 5, todo_id: 118, reminder_time: "2026-05-10 09:00" },
  ],
  comments: [
    {
      comment_id: 1,
      todo_id: 101,
      user_id: 2,
      text: "Don't forget testing",
      created_at: "2026-05-05",
    },
    {
      comment_id: 2,
      todo_id: 102,
      user_id: 3,
      text: "Practice more examples",
      created_at: "2026-05-05",
    },
    {
      comment_id: 3,
      todo_id: 114,
      user_id: 5,
      text: "Please verify on iPhone width too",
      created_at: "2026-05-07",
    },
    {
      comment_id: 4,
      todo_id: 118,
      user_id: 1,
      text: "Let's include auth stories in backlog",
      created_at: "2026-05-07",
    },
  ],
  attachments: [
    { attachment_id: 1, todo_id: 101, file_url: "design.png" },
    { attachment_id: 2, todo_id: 105, file_url: "presentation.pptx" },
    { attachment_id: 3, todo_id: 118, file_url: "sprint-plan.xlsx" },
    { attachment_id: 4, todo_id: 120, file_url: "dsa-notes.pdf" },
  ],
  recurringTasks: [
    { recurring_id: 1, todo_id: 103, repeat_type: "Daily" },
    { recurring_id: 2, todo_id: 121, repeat_type: "Weekly" },
  ],
  sharedTodos: [
    { todo_id: 101, user_id: 2 },
    { todo_id: 104, user_id: 1 },
    { todo_id: 114, user_id: 9 },
    { todo_id: 118, user_id: 4 },
  ],
};

const byId = (arr, key) => Object.fromEntries(arr.map((item) => [item[key], item]));
const usersById = byId(db.users, "user_id");
const categoriesById = byId(db.categories, "category_id");
const statusesById = byId(db.statuses, "status_id");
const prioritiesById = byId(db.priorities, "priority_id");
const tagsById = byId(db.tags, "tag_id");

function getTodoRelated(todoId) {
  return {
    subtasks: db.subtasks.filter((s) => s.todo_id === todoId),
    tags: db.todoTags
      .filter((tt) => tt.todo_id === todoId)
      .map((link) => tagsById[link.tag_id])
      .filter(Boolean),
    reminders: db.reminders.filter((r) => r.todo_id === todoId),
    comments: db.comments.filter((c) => c.todo_id === todoId),
    attachments: db.attachments.filter((a) => a.todo_id === todoId),
    recurring: db.recurringTasks.find((r) => r.todo_id === todoId),
    sharedUsers: db.sharedTodos
      .filter((s) => s.todo_id === todoId)
      .map((share) => usersById[share.user_id])
      .filter(Boolean),
  };
}

function renderNotFound() {
  document.getElementById("todoDetails").innerHTML = `
    <article class="rounded-xl bg-white p-6 shadow-sm">
      <h2 class="text-xl font-bold text-slate-800">Todo not found</h2>
      <p class="mt-2 text-slate-600">The requested todo does not exist. Please go back and choose a valid task.</p>
      <a href="./index.html" class="mt-4 inline-block rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700">Go to Dashboard</a>
    </article>
  `;
}

function renderTodo(todo) {
  const user = usersById[todo.user_id];
  const category = categoriesById[todo.category_id];
  const status = statusesById[todo.status_id]?.status ?? "-";
  const priority = prioritiesById[todo.priority_id]?.level ?? "-";
  const related = getTodoRelated(todo.todo_id);

  document.getElementById("todoDetails").innerHTML = `
    <article class="rounded-xl bg-white p-6 shadow-sm">
      <div class="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p class="text-xs font-semibold uppercase tracking-wide text-indigo-600">Todo #${todo.todo_id}</p>
          <h2 class="mt-1 text-2xl font-bold">${todo.title}</h2>
          <p class="mt-2 text-slate-600">${todo.description}</p>
        </div>
        <div class="space-y-2">
          <span class="block rounded-full bg-blue-100 px-3 py-1 text-center text-xs font-semibold text-blue-800">${status}</span>
          <span class="block rounded-full bg-rose-100 px-3 py-1 text-center text-xs font-semibold text-rose-800">${priority}</span>
        </div>
      </div>

      <div class="mt-6 grid gap-3 text-sm sm:grid-cols-2">
        <p><span class="font-semibold text-slate-800">Assignee:</span> ${user?.name ?? "-"}</p>
        <p><span class="font-semibold text-slate-800">Email:</span> ${user?.email ?? "-"}</p>
        <p><span class="font-semibold text-slate-800">Category:</span> ${category?.name ?? "-"}</p>
        <p><span class="font-semibold text-slate-800">Due Date:</span> ${todo.due_date}</p>
        <p><span class="font-semibold text-slate-800">Recurring:</span> ${related.recurring?.repeat_type ?? "No"}</p>
        <p><span class="font-semibold text-slate-800">Shared With:</span> ${
          related.sharedUsers.length ? related.sharedUsers.map((u) => u.name).join(", ") : "Only assignee"
        }</p>
      </div>

      <section class="mt-6">
        <h3 class="text-lg font-semibold">Tags</h3>
        <div class="mt-2 flex flex-wrap gap-2">
          ${
            related.tags.length
              ? related.tags.map((t) => `<span class="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">${t.name}</span>`).join("")
              : '<span class="text-sm text-slate-500">No tags</span>'
          }
        </div>
      </section>

      <section class="mt-6 grid gap-6 sm:grid-cols-2">
        <div>
          <h3 class="text-lg font-semibold">Subtasks</h3>
          <ul class="mt-2 space-y-2">
            ${
              related.subtasks.length
                ? related.subtasks
                    .map(
                      (s) =>
                        `<li class="rounded-md border border-slate-200 px-3 py-2 text-sm ${
                          s.is_completed ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"
                        }">${s.title} - ${s.is_completed ? "Completed" : "Pending"}</li>`
                    )
                    .join("")
                : '<li class="text-sm text-slate-500">No subtasks</li>'
            }
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-semibold">Reminders</h3>
          <ul class="mt-2 space-y-2">
            ${
              related.reminders.length
                ? related.reminders.map((r) => `<li class="rounded-md border border-slate-200 px-3 py-2 text-sm">${r.reminder_time}</li>`).join("")
                : '<li class="text-sm text-slate-500">No reminders</li>'
            }
          </ul>
        </div>
      </section>

      <section class="mt-6 grid gap-6 sm:grid-cols-2">
        <div>
          <h3 class="text-lg font-semibold">Comments</h3>
          <ul class="mt-2 space-y-2">
            ${
              related.comments.length
                ? related.comments
                    .map((c) => `<li class="rounded-md border border-slate-200 px-3 py-2 text-sm"><strong>${usersById[c.user_id]?.name ?? "User"}:</strong> ${c.text}</li>`)
                    .join("")
                : '<li class="text-sm text-slate-500">No comments</li>'
            }
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-semibold">Attachments</h3>
          <ul class="mt-2 space-y-2">
            ${
              related.attachments.length
                ? related.attachments.map((a) => `<li class="rounded-md border border-slate-200 px-3 py-2 text-sm">${a.file_url}</li>`).join("")
                : '<li class="text-sm text-slate-500">No attachments</li>'
            }
          </ul>
        </div>
      </section>
    </article>
  `;
}

function init() {
  const params = new URLSearchParams(window.location.search);
  const todoId = Number(params.get("todo_id"));
  const todo = db.todos.find((item) => item.todo_id === todoId);
  if (!todo) {
    renderNotFound();
    return;
  }
  renderTodo(todo);
}

init();
