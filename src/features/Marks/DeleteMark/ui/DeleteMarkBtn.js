import { Button } from "#shared/ui/Button";
import { DeleteIcon } from "#shared/ui/Icons";

// eslint-disable-next-line jsdoc/require-returns
/**
 * Кнопка удаления метки
 */
export const DeleteMarkBtn = ({ markId }) =>
  Button({
    text: "",
    iconSlot: DeleteIcon({ iconColor: "var(--colorImperialRed)" }),
    extraAttrs: [{ name: "data-js-delete-mark-btn", value: markId }],
  });
