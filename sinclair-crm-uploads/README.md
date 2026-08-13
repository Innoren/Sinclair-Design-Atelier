# Sinclair Design Atelier CRM — Frontend v2

A custom Next.js CRM frontend for Sinclair Design Atelier, designed to visually match the studio's dark, cinematic website and champagne accent system.

## What works now

- Dashboard with live totals calculated from CRM data
- Sales pipeline for New Inquiry → Qualified → Discovery → Proposal
- Leads table + Add Lead modal
- Clients grid + Add Client modal
- Projects table + progress tracking + Create Project modal
- Invoices table + Create Invoice modal
- Tasks + Add Task modal + completion toggle
- Responsive desktop/mobile navigation
- Link back to the public Sinclair Design Atelier website
- Demo data persists in browser `localStorage`
- Reset Demo Data button

## Important: frontend vs production CRM

This package is a functional **frontend demo**. Data is saved only in the browser currently, so it is not suitable as the permanent source of truth for your business yet.

For production, the next stage should replace localStorage with a database and authentication. Recommended stack:

- Supabase Postgres database
- Supabase Auth or Clerk for secure login
- Vercel for hosting
- Resend for CRM email notifications
- Stripe for invoice/payment links
- Vercel Blob or Supabase Storage for contracts/files

## Run it on your computer

You need Node.js installed.

1. Extract the ZIP.
2. Open Terminal / PowerShell in the `sinclair-crm` folder.
3. Install packages:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open:

```text
http://localhost:3000
```

## Make it live on Vercel — easiest method

### 1. Put the CRM on GitHub

Create a new private GitHub repository, for example:

```text
sinclair-crm
```

Upload all files from this folder to that repository.

### 2. Import it into Vercel

- Sign in to Vercel.
- Choose **Add New → Project**.
- Import the `sinclair-crm` GitHub repository.
- Vercel should automatically recognize it as Next.js.
- Leave the normal Next.js build settings at their defaults.
- Click **Deploy**.

After deployment Vercel will give the CRM a URL similar to:

```text
sinclair-crm.vercel.app
```

Every future push to the connected production branch can automatically create a new production deployment.

## Recommended URL structure

Keep the marketing website and CRM as separate Vercel projects.

Public website:

```text
www.sinclairdesignatelier.com
```

Private CRM:

```text
crm.sinclairdesignatelier.com
```

This is cleaner than putting the private CRM inside the public website project.

### Add `crm.sinclairdesignatelier.com`

After the CRM is deployed:

1. Open the CRM project in Vercel.
2. Go to **Settings → Domains**.
3. Add:

```text
crm.sinclairdesignatelier.com
```

4. Vercel will show the DNS record required for your domain provider.
5. Add that DNS record where your domain is managed.
6. Once DNS verifies, use the subdomain as the CRM address.

## Before using real customer information

Do not treat the localStorage demo as secure business storage. Before entering important customer contracts, invoices, passwords, or sensitive information, add:

1. Secure user authentication
2. Hosted database
3. Authorization rules
4. Server-side form validation
5. Audit logging
6. Secure file storage
7. Backups

## Connect your existing website inquiry form

The public website currently has Name, Email, Project Details, and Send Inquiry fields. In the production version, that form should call a secure API route that inserts a new row into the CRM `leads` table.

Suggested flow:

```text
Website inquiry
      ↓
/api/inquiries
      ↓
CRM Leads database
      ↓
New Inquiry pipeline stage
      ↓
Email notification to Sinclair
      ↓
Follow-up task automatically created
```

## Suggested database entities

### leads
- id
- company
- contact_name
- email
- phone
- source
- stage
- estimated_value
- notes
- next_action
- next_action_date
- created_at

### clients
- id
- company
- primary_contact
- email
- phone
- billing_address
- status
- created_at

### projects
- id
- client_id
- name
- scope
- phase
- contract_value
- start_date
- due_date
- progress

### invoices
- id
- client_id
- project_id
- invoice_number
- amount
- status
- due_date
- paid_at

### tasks
- id
- client_id
- project_id
- title
- priority
- due_date
- completed

### activities
- id
- lead_id
- client_id
- project_id
- type
- note
- created_at

## Production roadmap

**Phase 1 — Included here:** CRM frontend and local demo functionality.

**Phase 2:** Database + secure admin login + actual CRUD operations.

**Phase 3:** Connect Sinclair website inquiries directly to CRM leads.

**Phase 4:** Proposal builder, contracts, invoices, Stripe payments, client portal, email automations, and file uploads.
