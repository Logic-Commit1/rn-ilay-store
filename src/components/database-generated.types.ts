/* export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      order_items: {
        Row: {
          id: number
          product_id: number
          quantity: number
          user_order_id: number
        }
        Insert: {
          id?: never
          product_id: number
          quantity: number
          user_order_id: number
        }
        Update: {
          id?: never
          product_id?: number
          quantity?: number
          user_order_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "order_items_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "order_items_user_order_id_fkey"
            columns: ["user_order_id"]
            isOneToOne: false
            referencedRelation: "user_orders"
            referencedColumns: ["id"]
          }
        ]
      }
      products: {
        Row: {
          brand_name: string
          category: string
          id: number
          image_url: string
          name: string
          number_of_orders: number
          price: number
          stock: number
          weight: number
        }
        Insert: {
          brand_name: string
          category: string
          id?: never
          image_url: string
          name: string
          number_of_orders: number
          price: number
          stock: number
          weight: number
        }
        Update: {
          brand_name?: string
          category?: string
          id?: never
          image_url?: string
          name?: string
          number_of_orders?: number
          price?: number
          stock?: number
          weight?: number
        }
        Relationships: []
      }
      user_order_history: {
        Row: {
          id: number
          user_id: string
          user_order_id: number
        }
        Insert: {
          id?: never
          user_id: string
          user_order_id: number
        }
        Update: {
          id?: never
          user_id?: string
          user_order_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "user_order_history_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_order_history_user_order_id_fkey"
            columns: ["user_order_id"]
            isOneToOne: false
            referencedRelation: "user_orders"
            referencedColumns: ["id"]
          }
        ]
      }
      user_orders: {
        Row: {
          created_at: string
          id: number
          product_id: number
          quantity: number
          re_ordered: boolean
          total_price: number
          user_id: string
        }
        Insert: {
          created_at: string
          id?: never
          product_id: number
          quantity: number
          re_ordered: boolean
          total_price: number
          user_id: string
        }
        Update: {
          created_at?: string
          id?: never
          product_id?: number
          quantity?: number
          re_ordered?: boolean
          total_price?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_orders_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_orders_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      users: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          email: string | null
          full_name: string | null
          id: string
          total_completed_orders: number | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          email?: string | null
          full_name?: string | null
          id: string
          total_completed_orders?: number | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          email?: string | null
          full_name?: string | null
          id?: string
          total_completed_orders?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "users_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
 */
