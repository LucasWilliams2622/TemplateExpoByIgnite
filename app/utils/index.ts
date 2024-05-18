interface PasswordStrengthResult {
  strength: "strong" | "medium" | "weak"
  reasons: string[]
}

export function checkPasswordStrength(password: string): PasswordStrengthResult {
  const minLengthStrong = 12
  const minLengthMedium = 8
  const hasUpperCase = /[A-Z]/.test(password)
  const hasLowerCase = /[a-z]/.test(password)
  const hasNumber = /[0-9]/.test(password)
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password)

  const reasons: string[] = []

  if (password.length < minLengthMedium) {
    reasons.push(`Password should be at least ${minLengthMedium} characters long.`)
  }
  if (!hasUpperCase) {
    reasons.push("Password should contain at least one uppercase letter.")
  }
  if (!hasLowerCase) {
    reasons.push("Password should contain at least one lowercase letter.")
  }
  if (!hasNumber) {
    reasons.push("Password should contain at least one number.")
  }
  if (!hasSpecialChar) {
    reasons.push("Password should contain at least one special character.")
  }

  let strength: "strong" | "medium" | "weak"

  if (
    password.length >= minLengthStrong &&
    hasUpperCase &&
    hasLowerCase &&
    hasNumber &&
    hasSpecialChar
  ) {
    strength = "strong"
  } else if (password.length >= minLengthMedium && (hasUpperCase || hasLowerCase) && hasNumber) {
    strength = "medium"
  } else {
    strength = "weak"
  }

  return {
    strength,
    reasons,
  }
}
