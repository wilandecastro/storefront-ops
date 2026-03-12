variable "aws_region" {
  description = "AWS region"
  type        = "string"
  default     = "us-east-1"
}

variable "project_name" {
  description = "Project name"
  type        = "string"
  default     = "storefront-ops"
}

variable "container_port" {
  description = "Port exposed by the Docker container"
  type        = "number"
  default     = 3000
}

variable "ecs_task_cpu" {
  description = "CPU units for the ECS task"
  type        = "string"
  default     = "256"
}

variable "ecs_task_memory" {
  description = "Memory for the ECS task"
  type        = "string"
  default     = "512"
}
