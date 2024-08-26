## Inputs

### `threshhold`

**Required** Code Coverage Thresh Hold

### `jsonSummary`

**Required** Code Coverage Report

## Outputs

### `pass`

Code Coverage is pass or not

### `message`

Message

## Example usage

```yaml
verify-code-coverage:
    name: Verify Coverage
    runs-on: ubuntu-latest
    steps:
        - uses: namnh240795/verify-branch-name-action@v1.1.1
            with:
                threshhold: 90
                jsonSummary: {{ outputs.summary }}
```