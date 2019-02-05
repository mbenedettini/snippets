=== Angular material select of a list of loopback objects ===

```html
<div layout-gt-sm="row">
  <md-input-container flex-gt-sm="33">
    <label>Tipo</label>
    <md-select
      ng-disabled="!$ctrl.editing"
      ng-change="$ctrl.onOperationTypeChange()"
      ng-model-options="{trackBy: '$value.id'}"
      ng-model="$ctrl.operationType">
      <md-option
        ng-repeat="ot in $ctrl.operationTypes"
        ng-value="ot">
          {{ ot.name }}
      </md-option>
    </md-select>
  </md-input-container>
</div>
```

```javascript
class OperationController {
  constructor() {
  
    if (this.model.id) {
      this.operationType = this.model.operationType;
    }
  }


  onOperationTypeChange() {
    this.model.operationType = this.operationType;
  }

}
```
