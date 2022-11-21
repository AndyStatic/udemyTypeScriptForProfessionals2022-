type Padding651 = "small" | "medium" | "large" | (string & {});

function getPadding(padding: Padding651): string {
  if (padding === "small") return "12px";
  if (padding === "medium") return "16px";
  if (padding === "large") return "24px";
  return padding;
}


let padding651: Padding651;
padding651 = 'small'; //12px
padding651 = '8px'; //8px
padding651 = ''; //have autocomplete