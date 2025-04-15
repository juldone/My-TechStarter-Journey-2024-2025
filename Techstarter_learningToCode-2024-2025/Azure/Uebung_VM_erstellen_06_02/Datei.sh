RESOURCE_GROUP_NAME=rg-24-06-on-determeyer-julian
VM_NAME=AutomationAzureTS
USER=ubuntu
VNET_NAEM=Ktest-vnet

az vm create \
  --resource-group $RESOURCE_GROUP_NAME \
  --name $VM_NAME \
  --image Ubuntu2204 \
  --admin-username $USER \
  --authentication-type ssh \
  #--generate-ssh-keys \
  --ssh-key-value ~/.ssh/Blogtest_key.pem \
  --size Standard_B1s \
  --vnet-name Ktest-vnet \
  --subnet default \
  --public-ip-sku Standard