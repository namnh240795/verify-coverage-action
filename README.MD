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
        - uses: namnh240795/verify-coverage-action@1.0.4
            with:
                threshhold: 90
                jsonSummary: ${{ github.workspace }}/[path-to]/[your-coverage-final.json]
```