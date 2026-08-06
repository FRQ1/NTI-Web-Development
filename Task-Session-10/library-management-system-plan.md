## 1. Project Name

```
LibHub — Library Management System
```

---

## 2. Project Description

Library Management System is a web application that lets a library catalog its books, manage borrowing and returns, and let members search and reserve books online. It solves the problem of manual, paper-based or spreadsheet-based library tracking by giving librarians a digital catalog and giving members a self-service way to browse, reserve, and track their borrowed books.

- **Problem solved:** Replaces manual book tracking (physical ledgers/spreadsheets) with a digital catalog, automated due-date tracking, and self-service reservations.
- **Target users:** Librarians who manage the catalog and lending process, and members who borrow books.
- **Main purpose:** Let librarians manage the book catalog and lending records, while members search for books, reserve them, and track their own borrowing history.

---

## 3. Users and Roles

| Role | Permissions |
|---|---|
| **Admin** | Manage all users, manage librarians, view system-wide reports |
| **Librarian** | Manage book catalog, process borrow/return transactions, manage reservations |
| **Member** | Browse/search books, reserve books, view own borrowing history and due dates |

### Role Details

**Admin**
- Manage users (activate/suspend/delete accounts, assign librarian role)
- View/manage all librarians
- View system-wide reports (total books, active loans, overdue books)

**Librarian**
- Add, edit, and delete books in the catalog
- Process a borrow transaction (check out a book to a member)
- Process a return transaction (mark a book as returned)
- View and manage member reservations
- View overdue books and member borrowing history

**Member**
- Browse and search the book catalog by title/author/category
- Reserve a book that is currently unavailable
- View their own current loans, due dates, and borrowing history
- Update their own profile

---

## 4. Main Features

### Authentication Features
- Register (Member account by default; Librarian accounts created/approved by Admin)
- Login / Logout
- Email verification on signup
- Forgot password / reset password
- JWT-based session handling

### Authorization Features
- Role-based access control (Admin / Librarian / Member)
- Protected routes (e.g., only Librarians can access "Add Book" or "Process Return")
- Admin-only dashboard for user/librarian management
- Members can only view/cancel their own reservations and see their own borrowing history

### CRUD Features

#### Books Management (Librarian, Admin)
- **Create:** Add new book (title, author, ISBN, category, cover image, copies available)
- **Read:** View all books (catalog listing), view single book details
- **Update:** Edit book details, update number of available copies
- **Delete:** Remove a book from the catalog

#### Borrow/Loan Records Management (Librarian)
- **Create:** Check out a book to a member (creates a loan record with due date)
- **Read:** View all active loans, view a member's loan history
- **Update:** Extend/renew a due date
- **Delete:** Mark a loan as returned (closes the record)

#### Reservations Management (Member, Librarian)
- **Create:** Member reserves a book that's currently unavailable
- **Read:** View my reservations (member), view all pending reservations (librarian)
- **Update:** Librarian marks a reservation as ready for pickup
- **Delete:** Cancel a reservation

#### User Profile Management (All roles)
- **Create:** Account created on registration
- **Read:** View own profile
- **Update:** Edit profile info, change password, upload profile picture
- **Delete:** Deactivate own account

---

## 5. Image/File Upload Features

**Profile Picture**
```
Allowed: JPG, PNG
Maximum size: 5 MB
Uploaded by: All users (Admin, Librarian, Member)
```

**Book Cover Image**
```
Allowed: JPG, PNG, WEBP
Maximum size: 5 MB
Uploaded by: Librarian, Admin (when adding/editing a book)
```

---


## 8. Features List (Summary)

```
Authentication:
✓ Register
✓ Login / Logout
✓ Email Verification
✓ Forgot / Reset Password

Authorization:
✓ Admin dashboard
✓ Role-based access control
✓ Protected routes
✓ Ownership-based permissions (members see only their own loans/reservations)

CRUD:
✓ Manage books
✓ Manage loan/borrow records
✓ Manage reservations
✓ Manage user profiles

Upload:
✓ Profile pictures
✓ Book cover images
```

## UI Design Link

https://www.figma.com/design/zhlt4hsf7xhLa7g58CfMRr/Library-Management-System?node-id=0-1&t=BPlHUaQ7MeH4LsnB-1