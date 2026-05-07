const db = {
  users: [
    { user_id: 1, name: "Nafeez Mahdi", email: "nafeez@example.com" },
    { user_id: 2, name: "Rahim Uddin", email: "rahim@example.com" },
    { user_id: 3, name: "Ayesha Khan", email: "ayesha@example.com" },
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
  ],
  subtasks: [
    { subtask_id: 1, todo_id: 101, title: "Design UI", is_completed: false },
    { subtask_id: 2, todo_id: 101, title: "Connect API", is_completed: false },
    { subtask_id: 3, todo_id: 102, title: "Read ERD notes", is_completed: true },
    { subtask_id: 4, todo_id: 104, title: "Warm-up", is_completed: true },
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
  ],
  reminders: [
    { reminder_id: 1, todo_id: 101, reminder_time: "2026-05-09 10:00" },
    { reminder_id: 2, todo_id: 103, reminder_time: "2026-05-06 08:00" },
    { reminder_id: 3, todo_id: 104, reminder_time: "2026-05-07 06:00" },
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
  ],
  attachments: [
    { attachment_id: 1, todo_id: 101, file_url: "design.png" },
    { attachment_id: 2, todo_id: 105, file_url: "presentation.pptx" },
  ],
  recurringTasks: [{ recurring_id: 1, todo_id: 103, repeat_type: "Daily" }],
  sharedTodos: [
    { todo_id: 101, user_id: 2 },
    { todo_id: 104, user_id: 1 },
  ],
};

const el = {
  stats: document.getElementById("stats"),
  todoList: document.getElementById("todoList"),
  usersList: document.getElementById("usersList"),
  statusesList: document.getElementById("statusesList"),
  prioritiesList: document.getElementById("prioritiesList"),
  categoriesList: document.getElementById("categoriesList"),
  tagsList: document.getElementById("tagsList"),
  searchInput: document.getElementById("searchInput"),
  userFilter: document.getElementById("userFilter"),
  categoryFilter: document.getElementById("categoryFilter"),
  statusFilter: document.getElementById("statusFilter"),
  priorityFilter: document.getElementById("priorityFilter"),
  tagFilter: document.getElementById("tagFilter"),
  resetFiltersBtn: document.getElementById("resetFiltersBtn"),
  liveClock: document.getElementById("liveClock"),
  liveDate: document.getElementById("liveDate"),
};

const byId = (arr, key) => Object.fromEntries(arr.map((item) => [item[key], item]));
const usersById = byId(db.users, "user_id");
const categoriesById = byId(db.categories, "category_id");
const statusesById = byId(db.statuses, "status_id");
const prioritiesById = byId(db.priorities, "priority_id");
const tagsById = byId(db.tags, "tag_id");

const statusClass = {
  Pending: "bg-amber-100 text-amber-800",
  "In Progress": "bg-blue-100 text-blue-800",
  Completed: "bg-emerald-100 text-emerald-800",
};

const priorityClass = {
  Low: "bg-slate-200 text-slate-700",
  Medium: "bg-orange-100 text-orange-800",
  High: "bg-rose-100 text-rose-800",
};

const state = {
  search: "",
  userId: "",
  categoryId: "",
  statusId: "",
  priorityId: "",
  tagId: "",
};

function renderStats() {
  const completed = db.todos.filter((t) => statusesById[t.status_id].status === "Completed").length;
  const pending = db.todos.filter((t) => statusesById[t.status_id].status === "Pending").length;
  const inProgress = db.todos.filter((t) => statusesById[t.status_id].status === "In Progress").length;
  const overdue = db.todos.filter((t) => t.due_date < "2026-05-06" && statusesById[t.status_id].status !== "Completed").length;

  const cards = [
    { label: "Total Todos", value: db.todos.length },
    { label: "Pending", value: pending },
    { label: "In Progress", value: inProgress },
    { label: "Completed", value: completed },
    { label: "Overdue", value: overdue },
  ];

  el.stats.innerHTML = cards
    .map(
      (card) => `
      <article class="rounded-xl bg-white p-4 shadow-sm">
        <p class="text-sm text-slate-500">${card.label}</p>
        <p class="mt-2 text-2xl font-bold">${card.value}</p>
      </article>
    `
    )
    .join("");
}

function makeOptions(target, items, valueKey, labelKey) {
  target.innerHTML = `<option value="">All</option>${items
    .map((item) => `<option value="${item[valueKey]}">${item[labelKey]}</option>`)
    .join("")}`;
}

function renderSidebar() {
  el.usersList.innerHTML = db.users
    .map(
      (user) => `
      <button type="button" data-user-id="${user.user_id}" class="user-chip w-full rounded-md border border-slate-200 p-2 text-left hover:bg-slate-50">
        <p class="font-medium">${user.name}</p>
        <p class="text-xs text-slate-500">${user.email}</p>
      </button>
    `
    )
    .join("");

  el.statusesList.innerHTML = db.statuses
    .map(
      (status) =>
        `<button type="button" data-status-id="${status.status_id}" class="status-chip rounded-full px-3 py-1 text-xs font-semibold ${statusClass[status.status]} hover:opacity-90">${status.status}</button>`
    )
    .join("");

  el.prioritiesList.innerHTML = db.priorities
    .map(
      (priority) =>
        `<button type="button" data-priority-id="${priority.priority_id}" class="priority-chip rounded-full px-3 py-1 text-xs font-semibold ${priorityClass[priority.level]} hover:opacity-90">${priority.level}</button>`
    )
    .join("");

  el.categoriesList.innerHTML = db.categories
    .map(
      (category) =>
        `<button type="button" data-category-id="${category.category_id}" class="category-chip rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700 hover:bg-indigo-200">${category.name}</button>`
    )
    .join("");

  el.tagsList.innerHTML = db.tags
    .map(
      (tag) =>
        `<button type="button" data-tag-id="${tag.tag_id}" class="tag-chip rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700 hover:bg-purple-200">${tag.name}</button>`
    )
    .join("");

  highlightActiveChips();
}

function getTodoRelated(todoId) {
  const subtasks = db.subtasks.filter((s) => s.todo_id === todoId);
  const todoTagLinks = db.todoTags.filter((tt) => tt.todo_id === todoId);
  const tags = todoTagLinks.map((link) => tagsById[link.tag_id]).filter(Boolean);
  const reminders = db.reminders.filter((r) => r.todo_id === todoId);
  const comments = db.comments.filter((c) => c.todo_id === todoId);
  const attachments = db.attachments.filter((a) => a.todo_id === todoId);
  const recurring = db.recurringTasks.find((r) => r.todo_id === todoId);
  const sharedUsers = db.sharedTodos.filter((s) => s.todo_id === todoId).map((share) => usersById[share.user_id]).filter(Boolean);

  return { subtasks, tags, reminders, comments, attachments, recurring, sharedUsers };
}

function filterTodos() {
  return db.todos.filter((todo) => {
    const matchesSearch =
      !state.search ||
      todo.title.toLowerCase().includes(state.search) ||
      todo.description.toLowerCase().includes(state.search);

    const matchesUser = !state.userId || String(todo.user_id) === state.userId;
    const matchesCategory = !state.categoryId || String(todo.category_id) === state.categoryId;
    const matchesStatus = !state.statusId || String(todo.status_id) === state.statusId;
    const matchesPriority = !state.priorityId || String(todo.priority_id) === state.priorityId;
    const matchesTag =
      !state.tagId ||
      db.todoTags.some((todoTag) => todoTag.todo_id === todo.todo_id && String(todoTag.tag_id) === state.tagId);

    return matchesSearch && matchesUser && matchesCategory && matchesStatus && matchesPriority && matchesTag;
  });
}

function highlightActiveChips() {
  document.querySelectorAll(".user-chip").forEach((chip) => {
    const isActive = chip.dataset.userId === state.userId && state.userId !== "";
    chip.classList.toggle("ring-2", isActive);
    chip.classList.toggle("ring-slate-400", isActive);
  });

  document.querySelectorAll(".status-chip").forEach((chip) => {
    const isActive = chip.dataset.statusId === state.statusId && state.statusId !== "";
    chip.classList.toggle("ring-2", isActive);
    chip.classList.toggle("ring-blue-400", isActive);
  });

  document.querySelectorAll(".priority-chip").forEach((chip) => {
    const isActive = chip.dataset.priorityId === state.priorityId && state.priorityId !== "";
    chip.classList.toggle("ring-2", isActive);
    chip.classList.toggle("ring-rose-400", isActive);
  });

  document.querySelectorAll(".category-chip").forEach((chip) => {
    const isActive = chip.dataset.categoryId === state.categoryId && state.categoryId !== "";
    chip.classList.toggle("ring-2", isActive);
    chip.classList.toggle("ring-indigo-400", isActive);
  });

  document.querySelectorAll(".tag-chip").forEach((chip) => {
    const isActive = chip.dataset.tagId === state.tagId && state.tagId !== "";
    chip.classList.toggle("ring-2", isActive);
    chip.classList.toggle("ring-purple-400", isActive);
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderTodos() {
  const todos = filterTodos();
  if (todos.length === 0) {
    el.todoList.innerHTML = `<p class="rounded-md border border-dashed border-slate-300 p-4 text-sm text-slate-500">No todos found for the selected filters.</p>`;
    return;
  }

  el.todoList.innerHTML = todos
    .map((todo) => {
      const user = usersById[todo.user_id];
      const category = categoriesById[todo.category_id];
      const status = statusesById[todo.status_id]?.status;
      const priority = prioritiesById[todo.priority_id]?.level;
      const related = getTodoRelated(todo.todo_id);
      const completeSubtasks = related.subtasks.filter((s) => s.is_completed).length;
      const safeTitle = escapeHtml(todo.title);
      const safeDescription = escapeHtml(todo.description);

      return `
        <article id="todo-${todo.todo_id}" data-todo-id="${todo.todo_id}" class="rounded-lg border border-slate-200 p-4 transition-shadow">
          <div class="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 class="text-lg font-semibold">
                <a href="./todo.html?todo_id=${todo.todo_id}" class="text-indigo-700 hover:underline">
                  ${safeTitle}
                </a>
              </h3>
              <p class="text-sm text-slate-600">${safeDescription}</p>
            </div>
            <div class="flex gap-2">
              <button type="button" data-card-status-id="${todo.status_id}" class="rounded-full px-3 py-1 text-xs font-semibold ${statusClass[status]} hover:opacity-90">${status}</button>
              <button type="button" data-card-priority-id="${todo.priority_id}" class="rounded-full px-3 py-1 text-xs font-semibold ${priorityClass[priority]} hover:opacity-90">${priority}</button>
            </div>
          </div>

          <div class="mt-3 grid gap-2 text-sm text-slate-600 sm:grid-cols-2 lg:grid-cols-3">
            <p><span class="font-medium text-slate-800">Assignee:</span> ${
              user
                ? `<button type="button" data-card-user-id="${user.user_id}" class="ml-1 rounded bg-slate-200 px-2 py-0.5 text-xs font-semibold text-slate-700 hover:bg-slate-300">${user.name}</button>`
                : "-"
            }</p>
            <p><span class="font-medium text-slate-800">Category:</span> ${
              category
                ? `<button type="button" data-card-category-id="${category.category_id}" class="ml-1 rounded bg-indigo-100 px-2 py-0.5 text-xs font-semibold text-indigo-700 hover:bg-indigo-200">${category.name}</button>`
                : "-"
            }</p>
            <p><span class="font-medium text-slate-800">Due Date:</span> ${todo.due_date}</p>
            <p><span class="font-medium text-slate-800">Subtasks:</span> ${completeSubtasks}/${related.subtasks.length}</p>
            <p><span class="font-medium text-slate-800">Comments:</span> ${related.comments.length}</p>
            <p><span class="font-medium text-slate-800">Attachments:</span> ${related.attachments.length}</p>
          </div>

          <div class="mt-3 space-y-2 text-sm">
            <p><span class="font-medium text-slate-800">Tags:</span> ${
              related.tags.length
                ? related.tags
                    .map(
                      (t) =>
                        `<button type="button" data-card-tag-id="${t.tag_id}" class="ml-1 rounded bg-purple-100 px-2 py-0.5 text-xs font-semibold text-purple-700 hover:bg-purple-200">${t.name}</button>`
                    )
                    .join("")
                : "<span class='text-slate-500'>None</span>"
            }</p>
            <p><span class="font-medium text-slate-800">Reminder:</span> ${
              related.reminders.length ? related.reminders.map((r) => r.reminder_time).join(", ") : "<span class='text-slate-500'>None</span>"
            }</p>
            <p><span class="font-medium text-slate-800">Recurring:</span> ${
              related.recurring ? related.recurring.repeat_type : "<span class='text-slate-500'>No</span>"
            }</p>
            <p><span class="font-medium text-slate-800">Shared with:</span> ${
              related.sharedUsers.length ? related.sharedUsers.map((u) => u.name).join(", ") : "<span class='text-slate-500'>Only assignee</span>"
            }</p>
          </div>
        </article>
      `;
    })
    .join("");
}

function bindEvents() {
  el.searchInput.addEventListener("input", (e) => {
    state.search = e.target.value.trim().toLowerCase();
    renderTodos();
  });

  el.userFilter.addEventListener("change", (e) => {
    state.userId = e.target.value;
    renderTodos();
    highlightActiveChips();
  });
  el.categoryFilter.addEventListener("change", (e) => {
    state.categoryId = e.target.value;
    renderTodos();
    highlightActiveChips();
  });
  el.statusFilter.addEventListener("change", (e) => {
    state.statusId = e.target.value;
    renderTodos();
    highlightActiveChips();
  });
  el.priorityFilter.addEventListener("change", (e) => {
    state.priorityId = e.target.value;
    renderTodos();
    highlightActiveChips();
  });
  el.tagFilter.addEventListener("change", (e) => {
    state.tagId = e.target.value;
    renderTodos();
    highlightActiveChips();
  });

  el.usersList.addEventListener("click", (e) => {
    const chip = e.target.closest("[data-user-id]");
    if (!chip) return;
    state.userId = state.userId === chip.dataset.userId ? "" : chip.dataset.userId;
    el.userFilter.value = state.userId;
    renderTodos();
    highlightActiveChips();
  });

  el.statusesList.addEventListener("click", (e) => {
    const chip = e.target.closest("[data-status-id]");
    if (!chip) return;
    state.statusId = state.statusId === chip.dataset.statusId ? "" : chip.dataset.statusId;
    el.statusFilter.value = state.statusId;
    renderTodos();
    highlightActiveChips();
  });

  el.prioritiesList.addEventListener("click", (e) => {
    const chip = e.target.closest("[data-priority-id]");
    if (!chip) return;
    state.priorityId = state.priorityId === chip.dataset.priorityId ? "" : chip.dataset.priorityId;
    el.priorityFilter.value = state.priorityId;
    renderTodos();
    highlightActiveChips();
  });

  el.categoriesList.addEventListener("click", (e) => {
    const chip = e.target.closest("[data-category-id]");
    if (!chip) return;
    state.categoryId = state.categoryId === chip.dataset.categoryId ? "" : chip.dataset.categoryId;
    el.categoryFilter.value = state.categoryId;
    renderTodos();
    highlightActiveChips();
  });

  el.tagsList.addEventListener("click", (e) => {
    const chip = e.target.closest("[data-tag-id]");
    if (!chip) return;
    state.tagId = state.tagId === chip.dataset.tagId ? "" : chip.dataset.tagId;
    el.tagFilter.value = state.tagId;
    renderTodos();
    highlightActiveChips();
  });

  el.todoList.addEventListener("click", (e) => {
    const userButton = e.target.closest("[data-card-user-id]");
    if (userButton) {
      const clickedUserId = userButton.dataset.cardUserId;
      state.userId = state.userId === clickedUserId ? "" : clickedUserId;
      el.userFilter.value = state.userId;
      renderTodos();
      highlightActiveChips();
      return;
    }

    const statusButton = e.target.closest("[data-card-status-id]");
    if (statusButton) {
      const clickedStatusId = statusButton.dataset.cardStatusId;
      state.statusId = state.statusId === clickedStatusId ? "" : clickedStatusId;
      el.statusFilter.value = state.statusId;
      renderTodos();
      highlightActiveChips();
      return;
    }

    const priorityButton = e.target.closest("[data-card-priority-id]");
    if (priorityButton) {
      const clickedPriorityId = priorityButton.dataset.cardPriorityId;
      state.priorityId = state.priorityId === clickedPriorityId ? "" : clickedPriorityId;
      el.priorityFilter.value = state.priorityId;
      renderTodos();
      highlightActiveChips();
      return;
    }

    const categoryButton = e.target.closest("[data-card-category-id]");
    if (categoryButton) {
      const clickedCategoryId = categoryButton.dataset.cardCategoryId;
      state.categoryId = state.categoryId === clickedCategoryId ? "" : clickedCategoryId;
      el.categoryFilter.value = state.categoryId;
      renderTodos();
      highlightActiveChips();
      return;
    }

    const tagButton = e.target.closest("[data-card-tag-id]");
    if (tagButton) {
      const clickedTagId = tagButton.dataset.cardTagId;
      state.tagId = state.tagId === clickedTagId ? "" : clickedTagId;
      el.tagFilter.value = state.tagId;
      renderTodos();
      highlightActiveChips();
    }
  });

  el.resetFiltersBtn.addEventListener("click", () => {
    state.search = "";
    state.userId = "";
    state.categoryId = "";
    state.statusId = "";
    state.priorityId = "";
    state.tagId = "";

    el.searchInput.value = "";
    el.userFilter.value = "";
    el.categoryFilter.value = "";
    el.statusFilter.value = "";
    el.priorityFilter.value = "";
    el.tagFilter.value = "";

    renderTodos();
    highlightActiveChips();
  });
}

function startDateTime() {
  if (!el.liveClock || !el.liveDate) return;

  const update = () => {
    const now = new Date();
    el.liveClock.textContent = now.toLocaleTimeString(undefined, {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
    el.liveDate.textContent = now.toLocaleDateString(undefined, {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  update();
  setInterval(update, 1000);
}

function init() {
  renderStats();
  renderSidebar();
  makeOptions(el.userFilter, db.users, "user_id", "name");
  makeOptions(el.categoryFilter, db.categories, "category_id", "name");
  makeOptions(el.statusFilter, db.statuses, "status_id", "status");
  makeOptions(el.priorityFilter, db.priorities, "priority_id", "level");
  makeOptions(el.tagFilter, db.tags, "tag_id", "name");
  bindEvents();
  startDateTime();
  renderTodos();
}

init();
