Two-Phase Commit (2PC) is a protocol used in distributed systems to ensure that a transaction is either committed or aborted across all participating nodes, maintaining atomicity and consistency. Here is a detailed explanation of how the 2PC protocol works:

### Phase 1: Prepare Phase

1. **Coordinator Sends Prepare Request**:
   - The coordinator (a designated node managing the transaction) initiates the process by sending a `prepare` request to all participating nodes (participants). This message asks each participant if they can commit the transaction.

2. **Participants Respond**:
   - Each participant processes the transaction up to the point of committing (e.g., locks resources, performs necessary computations).
   - Each participant then writes a `prepare` log entry to ensure that the decision can be recovered in case of a failure.
   - After preparing, participants send a response back to the coordinator. The response can be:
     - `Vote-Yes`: If the participant is ready to commit.
     - `Vote-No`: If the participant cannot commit due to some issue (e.g., data inconsistency, failure to acquire necessary resources).

### Phase 2: Commit/Abort Phase

3. **Coordinator Decision**:
   - The coordinator collects all the votes from the participants.
   - If all participants have voted `yes`, the coordinator decides to commit the transaction and sends a `commit` message to all participants.
   - If any participant has voted `no`, the coordinator decides to abort the transaction and sends an `abort` message to all participants.

4. **Participants Act on Coordinator's Decision**:
   - Upon receiving the coordinator's decision:
     - If a participant receives a `commit` message, it commits the transaction, makes the changes permanent, and writes a `commit` log entry.
     - If a participant receives an `abort` message, it rolls back the transaction, reverting any changes made during the preparation phase, and writes an `abort` log entry.

### Advantages of 2PC

- **Atomicity**: Ensures that all participants either commit or abort the transaction, maintaining consistency across the distributed system.
- **Simplicity**: Relatively straightforward to implement compared to more complex protocols like 3PC.

### Disadvantages of 2PC

- **Blocking**: If the coordinator fails after sending the `prepare` messages but before sending the final decision, participants may remain in the prepared state indefinitely, waiting for a decision.
- **Single Point of Failure**: The coordinator is a single point of failure. If it crashes, the protocol may be unable to complete, leading to potential inconsistencies.

### Example Scenario

Consider a distributed banking system where a customer wants to transfer money from Account A (in one bank) to Account B (in another bank).

1. **Prepare Phase**:
   - The coordinator sends a `prepare` message to both banks.
   - Each bank checks if it can proceed with the transaction:
     - Bank A verifies if Account A has sufficient funds and prepares to debit the amount.
     - Bank B prepares to credit the amount to Account B.
   - Both banks send a `vote-yes` or `vote-no` response back to the coordinator.

2. **Commit/Abort Phase**:
   - If both banks respond with `vote-yes`, the coordinator sends a `commit` message, finalizing the transaction.
   - If either bank responds with `vote-no`, the coordinator sends an `abort` message, and the transaction is canceled.

By following these steps, the 2PC protocol ensures that the transaction is either fully completed or fully canceled, maintaining the consistency of the distributed system.