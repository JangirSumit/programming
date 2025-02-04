Three-Phase Commit (3PC) is an extension of the Two-Phase Commit (2PC) protocol designed to address the blocking issue and the single point of failure present in 2PC. 3PC introduces an additional phase to make the protocol non-blocking and more resilient to coordinator failures. Here is a detailed explanation of the 3PC protocol:

### Phase 1: CanCommit Phase

1. **Coordinator Sends CanCommit Request**:
   - The coordinator sends a `canCommit` request to all participants, asking if they can prepare to commit the transaction.
   - This message is similar to the `prepare` message in 2PC but specifically asks if the participants can prepare.

2. **Participants Respond**:
   - Each participant processes the request, determines if it can commit the transaction, and sends a response back to the coordinator:
     - `Yes`: If the participant can prepare to commit.
     - `No`: If the participant cannot commit the transaction.

### Phase 2: PreCommit Phase

3. **Coordinator Decision Based on Responses**:
   - If all participants respond with `Yes`, the coordinator sends a `preCommit` message to all participants.
   - If any participant responds with `No`, the coordinator sends an `abort` message to all participants.

4. **Participants Acknowledge**:
   - Participants who receive a `preCommit` message prepare to commit the transaction and send an acknowledgment to the coordinator.
   - Participants who receive an `abort` message roll back any changes and prepare to abort the transaction.

### Phase 3: Commit/Abort Phase

5. **Coordinator Final Decision**:
   - After receiving acknowledgments from all participants for the `preCommit` message, the coordinator sends a `commit` message to all participants.
   - If any participant fails to acknowledge the `preCommit` message, the coordinator sends an `abort` message to all participants.

6. **Participants Act on Coordinator's Final Decision**:
   - If participants receive a `commit` message, they commit the transaction and make the changes permanent.
   - If participants receive an `abort` message, they roll back the transaction and revert any changes made during the preparation phase.

### Advantages of 3PC

- **Non-Blocking**: Participants do not remain indefinitely in a waiting state if the coordinator fails, because the protocol ensures that they can make progress based on the messages they have received.
- **Reduced Single Point of Failure**: The additional phase allows the protocol to handle failures more gracefully, ensuring participants can independently decide to commit or abort based on the current state.

### Disadvantages of 3PC

- **Complexity**: 3PC is more complex to implement than 2PC due to the additional phase and the need to handle more states and transitions.
- **Higher Overhead**: The extra phase and additional messages increase the communication overhead, which can impact performance.

### Example Scenario

Consider a distributed banking system where a customer wants to transfer money from Account A (in one bank) to Account B (in another bank).

1. **CanCommit Phase**:
   - The coordinator sends a `canCommit` message to both banks.
   - Each bank checks if it can proceed with the transaction:
     - Bank A verifies if Account A has sufficient funds and prepares to debit the amount.
     - Bank B prepares to credit the amount to Account B.
   - Both banks send a `Yes` or `No` response back to the coordinator.

2. **PreCommit Phase**:
   - If both banks respond with `Yes`, the coordinator sends a `preCommit` message to both banks.
   - If either bank responds with `No`, the coordinator sends an `abort` message to both banks.
   - Upon receiving the `preCommit` message, both banks prepare to commit the transaction and send acknowledgments to the coordinator.

3. **Commit/Abort Phase**:
   - After receiving acknowledgments from both banks, the coordinator sends a `commit` message to both banks.
   - If any bank fails to acknowledge the `preCommit` message, the coordinator sends an `abort` message to both banks.
   - Banks commit the transaction if they receive a `commit` message or roll back if they receive an `abort` message.

By following these steps, the 3PC protocol ensures that the transaction is either fully committed or fully aborted while reducing the likelihood of participants being blocked indefinitely due to coordinator failures.