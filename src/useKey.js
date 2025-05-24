import { useEffect } from "react";

export function UseKey(key, action) {
  useEffect(
    function () {
      function handleKeyDown(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
        }
      }

      document.addEventListener("keydown", handleKeyDown);

      // Cleanup: Remove the event listener when the component unmounts
      return function () {
        document.removeEventListener("keydown", handleKeyDown);
      };
    },
    [action, key]
  );
}
