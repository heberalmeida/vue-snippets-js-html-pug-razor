/**
 * TypeScript Examples
 * 
 * This file demonstrates various TypeScript snippets available in the extension.
 * Use the snippet prefixes (e.g., tsinterface, tsclass) to generate these patterns.
 */

// Example 1: Interface and Type Definitions
// Snippets: tsinterface, tstype, tsenum

interface User {
  id: number
  name: string
  email: string
  role: UserRole
  createdAt: Date
  updatedAt?: Date
}

enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
  GUEST = 'guest'
}

type UserId = number
type Status = 'pending' | 'approved' | 'rejected'

// Example 2: Generic Class
// Snippets: tsclass, tsgeneric

class Repository<T> {
  private items: T[] = []

  add(item: T): void {
    this.items.push(item)
  }

  find(predicate: (item: T) => boolean): T | undefined {
    return this.items.find(predicate)
  }

  getAll(): T[] {
    return [...this.items]
  }
}

// Example 3: Async Function with Error Handling
// Snippets: tsasync, tspromise, tstry

async function fetchUser(id: number): Promise<User> {
  try {
    const response = await fetch(`/api/users/${id}`)
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const data: User = await response.json()
    return data
  } catch (error) {
    if (error instanceof Error) {
      console.error('Failed to fetch user:', error.message)
      throw error
    }
    throw new Error('Unknown error occurred')
  }
}

// Example 4: Type Guard
// Snippets: tstypeguard

interface ApiResponse {
  success: boolean
  data?: unknown
  error?: string
}

function isApiResponse(value: unknown): value is ApiResponse {
  return (
    typeof value === 'object' &&
    value !== null &&
    'success' in value &&
    typeof (value as ApiResponse).success === 'boolean'
  )
}

// Example 5: Utility Types
// Snippets: tspartial, tspick, tsomit

type PartialUser = Partial<User>
type UserPreview = Pick<User, 'id' | 'name' | 'email'>
type UserWithoutId = Omit<User, 'id'>

// Example 6: Generic Function
// Snippets: tsgeneric-function

function getValue<T>(key: string, defaultValue: T): T {
  const value = localStorage.getItem(key)
  return value ? JSON.parse(value) : defaultValue
}

// Example 7: Arrow Function
// Snippets: tsarrow

const formatUser = (user: User): string => {
  return `${user.name} (${user.email})`
}

// Example 8: Class with Getters and Setters
// Snippets: tsclass, tsgetter, tssetter

class UserService {
  private _users: User[] = []

  get users(): User[] {
    return [...this._users]
  }

  set users(value: User[]) {
    this._users = value
  }

  addUser(user: User): void {
    this._users.push(user)
  }
}

// Example 9: Export and Import
// Snippets: tsexport, tsimport

export { User, UserRole, UserService }
export type { UserId, Status, ApiResponse }

// Example 10: Type Assertion
// Snippets: tsassert

const userData = JSON.parse('{"id": 1, "name": "John"}') as User

