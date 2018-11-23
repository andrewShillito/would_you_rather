const actionPath = [
        "user interacts with UI and store update is necessary",
        "componentDispatchesData",
        "middleware checks if async func or not (thunk)",
        "if async func - once resolved it goes to next step",
        "actionCreator func is called - returns object",
        "object is dispatched to store which calls reducer",
        "appropriate reducer finds action.type and executes code therein",
        "reducer returns new store",
        "ui is updated"
    ];