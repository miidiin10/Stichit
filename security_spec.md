# StitchConnect Security Context

## 1. Data Invariants
- A user can only have one profile and it must match their authenticated UID.
- Tailors can update their portfolios; clients cannot.
- Orders must involve one client (who creates it) and one tailor. The `clientId` must match the authenticated user creating the order.
- Orders have strict status transitions (e.g., 'pending' -> 'approved' -> 'measured' -> 'in_progress' -> 'fitting' -> 'done'). Once 'done' or 'cancelled', no further updates except by potential admins.
- Messages inside a chat can only be read/written by members of that chat (`participants` array includes `request.auth.uid`).
- Reviews can only be submitted by clients about a specific tailor. They belong to `reviews` collection and are immutable after creation.
- PII (emails, phone numbers) must reside in `/users/{userId}/private/info` restricted to the owner only.

## 2. The "Dirty Dozen" Payloads

1. **Identity Spoofing (Create):** Creating an order with `clientId` set to another user's UID.
2. **Identity Spoofing (Update):** Attempting to change the `clientId` of an existing order.
3. **Role Elevation:** User updating their `users/{userId}/profile/main` to add `"role": "admin"`.
4. **Denial of Wallet:** Creating a review with a 5MB string in the `comment` field.
5. **Ghost Field Update:** Updating an order to add `isPaid: true` when doing an innocuous status update.
6. **PII Leakage:** Attempting to `get()` `/users/{otherId}/private/info`.
7. **Cross-Tenant Messaging:** Sending a message to a `chatId` where the sender is not in the chat's `participants` array.
8. **Statue Shortcutting:** Changing an order directly from `pending` to `done`.
9. **Review Forgery:** Creating a review where `clientId` does not equal `request.auth.uid`.
10. **Review Tampering:** Updating an existing review comment.
11. **Type Poisoning:** Passing a boolean instead of a string for `status`.
12. **Missing Relational Pointer:** Creating an order with a `tailorId` that does not exist in `users`.

## 3. Test Runner
(See `firestore.rules.test.ts` for actual verification.)
