.PHONY: help lint format test check

help: ## Show available targets
	@grep -E '^[a-zA-Z_-]+:.*?##' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  %-15s %s\n", $$1, $$2}'

lint: ## Run ESLint on JS files
	pnpm run lint

format: ## No formatter configured (raw SCSS/JS, no build step)
	@echo "No formatter configured — library uses raw files"

test: ## Run tests with Node.js built-in test runner
	pnpm run test

check: lint test ## Run lint + tests

security-verify: ## Run local security checks
	pnpm audit --audit-level=critical
